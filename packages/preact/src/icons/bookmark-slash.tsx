import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface BookmarkSlashIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BookmarkSlashIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BookmarkSlashIcon = ({ className, size = 28, ...props }: BookmarkSlashIconProps) => {
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
        
        <path d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
      
      </svg>
    </div>
  );
};

BookmarkSlashIcon.displayName = "BookmarkSlashIcon";

export { BookmarkSlashIcon };
