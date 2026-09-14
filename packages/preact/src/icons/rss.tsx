import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface RssIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface RssIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const RssIcon = ({ className, size = 28, ...props }: RssIconProps) => {
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
        
          <path d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          <path
            d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5"
          />
          <path
            d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75"
          />
        
      </svg>
    </div>
  );
};

RssIcon.displayName = "RssIcon";

export { RssIcon };
