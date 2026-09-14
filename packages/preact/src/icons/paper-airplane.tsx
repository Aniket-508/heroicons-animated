import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PaperAirplaneIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PaperAirplaneIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PaperAirplaneIcon = ({ className, size = 28, ...props }: PaperAirplaneIconProps) => {
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
        
        <g
        >
          <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </g>
      
      </svg>
    </div>
  );
};

PaperAirplaneIcon.displayName = "PaperAirplaneIcon";

export { PaperAirplaneIcon };
