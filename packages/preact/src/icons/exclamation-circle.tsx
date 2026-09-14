import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ExclamationCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ExclamationCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ExclamationCircleIcon = ({ className, size = 28, ...props }: ExclamationCircleIconProps) => {
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
        
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <g
        >
          <path d="M12 9v3.75" />
          <path d="M12 15.75h.008v.008H12v-.008Z" />
        </g>
      
      </svg>
    </div>
  );
};

ExclamationCircleIcon.displayName = "ExclamationCircleIcon";

export { ExclamationCircleIcon };
