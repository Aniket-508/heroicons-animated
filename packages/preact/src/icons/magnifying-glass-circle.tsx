import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MagnifyingGlassCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MagnifyingGlassCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MagnifyingGlassCircleIcon = ({ className, size = 28, ...props }: MagnifyingGlassCircleIconProps) => {
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
        
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        <path
          d="M15.75 15.75L13.2615 13.2615M13.2615 13.2615C13.8722 12.6507 14.25 11.807 14.25 10.875C14.25 9.01104 12.739 7.5 10.875 7.5C9.01104 7.5 7.5 9.01104 7.5 10.875C7.5 12.739 9.01104 14.25 10.875 14.25C11.807 14.25 12.6507 13.8722 13.2615 13.2615"
        />
      
      </svg>
    </div>
  );
};

MagnifyingGlassCircleIcon.displayName = "MagnifyingGlassCircleIcon";

export { MagnifyingGlassCircleIcon };
