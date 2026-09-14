import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ViewfinderCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ViewfinderCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ViewfinderCircleIcon = ({ className, size = 28, ...props }: ViewfinderCircleIconProps) => {
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
          d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5"
        />
        <path
          d="M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5"
        />
        <path
          d="M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5"
        />
        <path
          d="M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5"
        />
        <path
          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        />
      
      </svg>
    </div>
  );
};

ViewfinderCircleIcon.displayName = "ViewfinderCircleIcon";

export { ViewfinderCircleIcon };
