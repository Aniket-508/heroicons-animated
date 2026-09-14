import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PlayIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlayIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PlayIcon = ({ className, size = 28, ...props }: PlayIconProps) => {
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
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        
      </svg>
    </div>
  );
};

PlayIcon.displayName = "PlayIcon";

export { PlayIcon };
