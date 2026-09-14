import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUpLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUpLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUpLeftIcon = ({ className, size = 28, ...props }: ArrowUpLeftIconProps) => {
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
            d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
          />
        
      </svg>
    </div>
  );
};

ArrowUpLeftIcon.displayName = "ArrowUpLeftIcon";

export { ArrowUpLeftIcon };
