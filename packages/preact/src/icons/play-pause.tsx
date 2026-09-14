import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PlayPauseIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlayPauseIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PlayPauseIcon = ({ className, size = 28, ...props }: PlayPauseIconProps) => {
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
            d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"
          />
        
      </svg>
    </div>
  );
};

PlayPauseIcon.displayName = "PlayPauseIcon";

export { PlayPauseIcon };
