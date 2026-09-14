import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MagnifyingGlassPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MagnifyingGlassPlusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MagnifyingGlassPlusIcon = ({ className, size = 28, ...props }: MagnifyingGlassPlusIconProps) => {
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
        
        <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        <path
          d="M10.5 7.5v6"
        />
        <path
          d="M7.5 10.5h6"
        />
      
      </svg>
    </div>
  );
};

MagnifyingGlassPlusIcon.displayName = "MagnifyingGlassPlusIcon";

export { MagnifyingGlassPlusIcon };
