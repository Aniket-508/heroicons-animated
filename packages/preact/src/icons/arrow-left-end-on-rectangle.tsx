import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowLeftEndOnRectangleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLeftEndOnRectangleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowLeftEndOnRectangleIcon = ({ className, size = 28, ...props }: ArrowLeftEndOnRectangleIconProps) => {
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
        
        <path d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15" />
        <g>
          <path d="M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowLeftEndOnRectangleIcon.displayName = "ArrowLeftEndOnRectangleIcon";

export { ArrowLeftEndOnRectangleIcon };
