import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MicrophoneIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MicrophoneIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MicrophoneIcon = ({ className, size = 28, ...props }: MicrophoneIconProps) => {
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
        
          <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5" />
          <g
          >
            <path d="M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </g>
        
      </svg>
    </div>
  );
};

MicrophoneIcon.displayName = "MicrophoneIcon";

export { MicrophoneIcon };
