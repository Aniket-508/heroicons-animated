import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface SpeakerWaveIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SpeakerWaveIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const SpeakerWaveIcon = ({ className, size = 28, ...props }: SpeakerWaveIconProps) => {
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
            d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424"
          />
          <path
            d="M19.114 5.636a9 9 0 0 1 0 12.728"
          />
        
      </svg>
    </div>
  );
};

SpeakerWaveIcon.displayName = "SpeakerWaveIcon";

export { SpeakerWaveIcon };
