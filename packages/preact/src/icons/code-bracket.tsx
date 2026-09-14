import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CodeBracketIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CodeBracketIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CodeBracketIcon = ({ className, size = 28, ...props }: CodeBracketIconProps) => {
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
        
          <path
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        
      </svg>
    </div>
  );
};

CodeBracketIcon.displayName = "CodeBracketIcon";

export { CodeBracketIcon };
