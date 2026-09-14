import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface FolderMinusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FolderMinusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FolderMinusIcon = ({ className, size = 28, ...props }: FolderMinusIconProps) => {
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
        
          <path d="M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z" />
          <path
            d="M15 13.5H9"
          />
        
      </svg>
    </div>
  );
};

FolderMinusIcon.displayName = "FolderMinusIcon";

export { FolderMinusIcon };
