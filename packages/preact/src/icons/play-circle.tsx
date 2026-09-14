import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PlayCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlayCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PlayCircleIcon = ({ className, size = 28, ...props }: PlayCircleIconProps) => {
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
          <path
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
          />
        
      </svg>
    </div>
  );
};

PlayCircleIcon.displayName = "PlayCircleIcon";

export { PlayCircleIcon };
