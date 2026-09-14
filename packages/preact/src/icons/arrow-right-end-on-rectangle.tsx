import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowRightEndOnRectangleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowRightEndOnRectangleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowRightEndOnRectangleIcon = ({ className, size = 28, ...props }: ArrowRightEndOnRectangleIconProps) => {
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
        
        <path d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15" />
        <g>
          <path d="M12 9l3 3m0 0-3 3m3-3H2.25" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowRightEndOnRectangleIcon.displayName = "ArrowRightEndOnRectangleIcon";

export { ArrowRightEndOnRectangleIcon };
