import fs from "node:fs";
import path from "node:path";

const iconsDir = path.join(__dirname, "../../../packages/react/src/icons");
const vueOutputDir = path.join(__dirname, "../../../packages/vue/src/icons");
const svelteOutputDir = path.join(__dirname, "../../../packages/svelte/src/icons");

// Ensure output directories exist
if (!fs.existsSync(vueOutputDir)) {
  fs.mkdirSync(vueOutputDir, { recursive: true });
}
if (!fs.existsSync(svelteOutputDir)) {
  fs.mkdirSync(svelteOutputDir, { recursive: true });
}

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function extractIconData(content: string): {
  iconName: string;
  svgContent: string;
} | null {
  // Extract icon name from export
  const iconNameMatch = content.match(/export \{ (\w+Icon) \}/);
  if (!iconNameMatch) return null;
  const iconName = iconNameMatch[1];

  // Try to extract SVG content from motion.svg first
  let svgContentMatch = content.match(
    /<motion\.svg[\s\S]*?>([\s\S]*?)<\/motion\.svg>/
  );

  // If not found, try plain svg
  if (!svgContentMatch) {
    svgContentMatch = content.match(/<svg[\s\S]*?>([\s\S]*?)<\/svg>/);
  }

  if (!svgContentMatch) return null;

  // Clean up SVG content - convert motion.* to regular elements and remove React-specific props
  let svgContent = svgContentMatch[1]
    // Convert motion elements to regular elements
    .replace(/<motion\.path/g, "<path")
    .replace(/<\/motion\.path>/g, "</path>")
    .replace(/<motion\.circle/g, "<circle")
    .replace(/<\/motion\.circle>/g, "</circle>")
    .replace(/<motion\.g/g, "<g")
    .replace(/<\/motion\.g>/g, "</g>")
    .replace(/<motion\.rect/g, "<rect")
    .replace(/<\/motion\.rect>/g, "</rect>")
    .replace(/<motion\.line/g, "<line")
    .replace(/<\/motion\.line>/g, "</line>")
    .replace(/<motion\.polyline/g, "<polyline")
    .replace(/<\/motion\.polyline>/g, "</polyline>")
    .replace(/<motion\.polygon/g, "<polygon")
    .replace(/<\/motion\.polygon>/g, "</polygon>")
    .replace(/<motion\.ellipse/g, "<ellipse")
    .replace(/<\/motion\.ellipse>/g, "</ellipse>")
    // Remove motion-specific props (multiline safe)
    .replace(/\s*variants=\{[^}]+\}/g, "")
    .replace(/\s*animate=\{[^}]+\}/g, "")
    .replace(/\s*initial="[^"]+"/g, "")
    .replace(/\s*transition=\{[\s\S]*?\}\s*\}/g, "")
    // Remove style props (we'll handle them in the wrapper)
    .replace(/\s*style=\{\{[^}]*\}\}/g, "")
    .trim();

  // Clean up any empty attributes
  svgContent = svgContent.replace(/\s+>/g, ">").replace(/\s+\/>/g, " />");

  return {
    iconName,
    svgContent,
  };
}

function generateVueComponent(iconName: string, svgContent: string): string {
  const componentName = iconName.replace("Icon", "");

  // Find the first path element and wrap it with Motion
  // For simplicity, we'll wrap the first path element found
  let wrappedSvgContent = svgContent;
  const pathMatch = svgContent.match(/<path\s+([^>]*?)d="([^"]+)"([^>]*?)(\/>|>)/);
  if (pathMatch) {
    const fullPath = pathMatch[0];
    const attrs = pathMatch[1] + pathMatch[3];
    const d = pathMatch[2];
    const isSelfClosing = pathMatch[4] === '/>';
    
    // Extract other attributes from the path
    const otherAttrs = attrs.replace(/\s*variants=\{[^}]+\}/g, '')
      .replace(/\s*animate=\{[^}]+\}/g, '')
      .replace(/\s*initial="[^"]+"/g, '')
      .replace(/\s*transition=\{[\s\S]*?\}\s*\}/g, '')
      .trim();
    
    const motionPath = `<Motion is="path" ref="pathRef" d="${d}"${otherAttrs ? ' ' + otherAttrs : ''}${isSelfClosing ? ' />' : '></Motion>'}`;
    wrappedSvgContent = svgContent.replace(fullPath, motionPath);
  } else {
    // If no path found, try to wrap the first element (circle, rect, etc.)
    // For now, just use the original content and wrap the SVG itself
    wrappedSvgContent = svgContent;
  }

  return `<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${wrappedSvgContent}
    </svg>
  </div>
</template>

<script>
export default {
  name: '${componentName}Icon',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const variants = {
  normal: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 0.45,
      ease: 'easeInOut',
    },
  },
};

const pathRef = ref();
const motionInstance = useMotion(pathRef, {
  initial: variants.normal,
  enter: variants.normal,
});

let isControlled = false;

const startAnimation = () => {
  motionInstance.apply(variants.animate);
};

const stopAnimation = () => {
  motionInstance.apply(variants.normal);
};

const handleMouseEnter = () => {
  if (!isControlled) {
    startAnimation();
  }
};

const handleMouseLeave = () => {
  if (!isControlled) {
    stopAnimation();
  }
};

const setControlled = (value: boolean) => {
  isControlled = value;
};

defineExpose({
  startAnimation,
  stopAnimation,
  setControlled,
});
</script>
`;
}

function generateSvelteComponent(iconName: string, svgContent: string): string {
  const componentName = iconName.replace("Icon", "").toLowerCase();
  const animationClass = `${componentName}-animate`;

  return `<script lang="ts">
  export let size: number = 28;
  let className: string = '';
  export { className as class };

  let isAnimating = false;
  let isControlled = false;

  export function startAnimation() {
    if (!isControlled) {
      isAnimating = true;
      setTimeout(() => {
        isAnimating = false;
      }, 600);
    }
  }

  export function stopAnimation() {
    isAnimating = false;
  }

  export function setControlled(value: boolean) {
    isControlled = value;
  }

  function handleMouseEnter() {
    if (!isControlled) {
      startAnimation();
    }
  }

  function handleMouseLeave() {
    if (!isControlled) {
      stopAnimation();
    }
  }
</script>

<div
  class={className}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  role="img"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-svg"
    class:${animationClass}={isAnimating}
  >
    ${svgContent}
  </svg>
</div>

<style>
  div {
    display: inline-block;
  }

  .icon-svg {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .icon-svg.${animationClass} {
    animation: ${animationClass} 0.6s ease-in-out;
  }

  @keyframes ${animationClass} {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
`;
}

function processIcons() {
  const files = fs.readdirSync(iconsDir).filter((file) => {
    const fullPath = path.join(iconsDir, file);
    return (
      file.endsWith(".tsx") &&
      file !== "index.ts" &&
      !fs.statSync(fullPath).isDirectory()
    );
  });

  console.log(
    `\n🔨 Generating Vue and Svelte icons from ${files.length} React icons...\n`
  );

  let vueCount = 0;
  let svelteCount = 0;
  const failed: string[] = [];

  for (const file of files) {
    const filePath = path.join(iconsDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    const iconData = extractIconData(content);
    if (!iconData) {
      failed.push(file);
      continue;
    }

    const baseName = file.replace(".tsx", "");

    // Generate Vue component
    const vueContent = generateVueComponent(
      iconData.iconName,
      iconData.svgContent
    );
    fs.writeFileSync(path.join(vueOutputDir, `${baseName}.vue`), vueContent);
    vueCount++;

    // Generate Svelte component
    const svelteContent = generateSvelteComponent(
      iconData.iconName,
      iconData.svgContent
    );
    fs.writeFileSync(
      path.join(svelteOutputDir, `${baseName}.svelte`),
      svelteContent
    );
    svelteCount++;
  }

  console.log(`✅ Generated ${vueCount} Vue components in icons/vue/`);
  console.log(`✅ Generated ${svelteCount} Svelte components in icons/svelte/`);

  if (failed.length > 0) {
    console.log(`\n⚠️  Could not parse ${failed.length} files:`);
    failed.forEach((f) => console.log(`   - ${f}`));
  }

  console.log("");
}

processIcons();
