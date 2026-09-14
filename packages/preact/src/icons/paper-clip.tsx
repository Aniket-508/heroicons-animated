import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PaperClipIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PaperClipIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PaperClipIcon = ({ className, size = 28, ...props }: PaperClipIconProps) => {
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
            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
          />
        
      </svg>
    </div>
  );
};

PaperClipIcon.displayName = "PaperClipIcon";

export { PaperClipIcon };
