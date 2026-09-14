import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface BookmarkSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BookmarkSquareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BookmarkSquareIcon = ({ className, size = 28, ...props }: BookmarkSquareIconProps) => {
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
          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
        />
      
      </svg>
    </div>
  );
};

BookmarkSquareIcon.displayName = "BookmarkSquareIcon";

export { BookmarkSquareIcon };
