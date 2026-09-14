import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MapPinIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MapPinIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MapPinIcon = ({ className, size = 28, ...props }: MapPinIconProps) => {
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
        
          <path d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" />
          <path d="M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z" />
        
      </svg>
    </div>
  );
};

MapPinIcon.displayName = "MapPinIcon";

export { MapPinIcon };
