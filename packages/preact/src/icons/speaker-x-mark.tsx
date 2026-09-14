import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface SpeakerXMarkIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SpeakerXMarkIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const SpeakerXMarkIcon = ({ className, size = 28, ...props }: SpeakerXMarkIconProps) => {
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
        
        <path d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        <path
          d="M17.25 9.75L21.75 14.25"
        />
        <path
          d="M21.75 9.75L17.25 14.25"
        />
      
      </svg>
    </div>
  );
};

SpeakerXMarkIcon.displayName = "SpeakerXMarkIcon";

export { SpeakerXMarkIcon };
