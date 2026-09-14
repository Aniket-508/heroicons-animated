import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CloudIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CloudIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CloudIcon = ({ className, size = 28, ...props }: CloudIconProps) => {
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
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        
      </svg>
    </div>
  );
};

CloudIcon.displayName = "CloudIcon";

export { CloudIcon };
