import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowsPointingInIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsPointingInIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowsPointingInIcon = ({ className, size = 28, ...props }: ArrowsPointingInIconProps) => {
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
        
        <g>
          <path d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75" />
        </g>
        <g>
          <path d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25" />
        </g>
        <g>
          <path d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25" />
        </g>
        <g>
          <path d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowsPointingInIcon.displayName = "ArrowsPointingInIcon";

export { ArrowsPointingInIcon };
