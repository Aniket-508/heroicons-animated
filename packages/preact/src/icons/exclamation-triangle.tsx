import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ExclamationTriangleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ExclamationTriangleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ExclamationTriangleIcon = ({ className, size = 28, ...props }: ExclamationTriangleIconProps) => {
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
        
        <path d="M2.697 16.126c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
        <g
        >
          <path d="M12 9v3.75" />
          <path d="M12 15.75h.007v.008H12v-.008Z" />
        </g>
      
      </svg>
    </div>
  );
};

ExclamationTriangleIcon.displayName = "ExclamationTriangleIcon";

export { ExclamationTriangleIcon };
