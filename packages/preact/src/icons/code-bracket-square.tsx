import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CodeBracketSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CodeBracketSquareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CodeBracketSquareIcon = ({ className, size = 28, ...props }: CodeBracketSquareIconProps) => {
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
        
        <path d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        <path
          d="M9.75 9.75L7.5 12l2.25 2.25"
        />
        <path
          d="M14.25 9.75 16.5 12l-2.25 2.25"
        />
      
      </svg>
    </div>
  );
};

CodeBracketSquareIcon.displayName = "CodeBracketSquareIcon";

export { CodeBracketSquareIcon };
