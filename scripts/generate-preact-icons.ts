import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const reactDir = 'packages/react/src/icons';
const preactDir = 'packages/preact/src/icons';

const reactFiles = readdirSync(reactDir).filter(f => f.endsWith('.tsx'));

function cleanMotionProps(content: string): string {
  let result = content;
  
  // Remove animate={...} (single and multi-line)
  result = result.replace(/\s*animate=\{[^}]*\}/g, '');
  result = result.replace(/\s*animate=\{\{[\s\S]*?\}\}/g, '');
  
  // Remove initial={...}
  result = result.replace(/\s*initial=\{[^}]*\}/g, '');
  result = result.replace(/\s*initial=\{\{[\s\S]*?\}\}/g, '');
  result = result.replace(/\s*initial="[^"]*"/g, '');
  
  // Remove variants={...} (multi-line with nested braces)
  result = result.replace(/\s*variants=\{\{[\s\S]*?\}\}/g, '');
  result = result.replace(/\s*variants=\{[^}]*\}/g, '');
  
  // Remove transition={...} (multi-line)
  result = result.replace(/\s*transition=\{\{[\s\S]*?\}\}/g, '');
  result = result.replace(/\s*transition=\{[^}]*\}/g, '');
  
  // Remove style={{...}}
  result = result.replace(/\s*style=\{\{[\s\S]*?\}\}/g, '');
  
  // Remove key={...} (including template literals)
  result = result.replace(/\s*key=\{[^}]*\}/g, '');
  result = result.replace(/\s*key=\{`[^`]*`\}/g, '');
  
  // Remove custom={...}
  result = result.replace(/\s*custom=\{[^}]*\}/g, '');
  
  // Remove d={window.path} (dynamic paths that reference variables)
  result = result.replace(/\s*d=\{window\.path\}/g, '');
  
  // Remove any remaining motion-specific props with template literals
  result = result.replace(/\s*\w+=\{`[^`]*`\}/g, '');
  
  return result;
}

let count = 0;
let errors = 0;

for (const file of reactFiles) {
  const content = readFileSync(join(reactDir, file), 'utf-8');
  
  // Extract SVG content
  const svgMatch = content.match(/<(?:motion\.)?svg[^>]*>([\s\S]*?)<\/(?:motion\.)?svg>/);
  if (!svgMatch) {
    errors++;
    continue;
  }
  
  let svgContent = svgMatch[1];
  
  // Remove motion.* tags
  svgContent = svgContent.replace(/<motion\./g, '<');
  svgContent = svgContent.replace(/<\/motion\./g, '</');
  
  // Clean motion props
  svgContent = cleanMotionProps(svgContent);
  
  // Clean up empty lines
  svgContent = svgContent.replace(/\n\s*\n\s*\n/g, '\n');
  
  // Get icon name
  const iconName = file.replace('.tsx', '');
  const componentName = iconName.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Icon';
  
  const preactContent = `import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ${componentName}Handle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ${componentName}Props extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ${componentName} = ({ className, size = 28, ...props }: ${componentName}Props) => {
  return (
    <div
      className={cn("heroicon-animated heroicon-animate-scale", className)}
      {...props}
    >
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        ${svgContent}
      </svg>
    </div>
  );
};

${componentName}.displayName = "${componentName}";

export { ${componentName} };
`;
  
  writeFileSync(join(preactDir, file), preactContent);
  count++;
}

console.log(`Generated ${count} Preact icons, ${errors} errors`);
