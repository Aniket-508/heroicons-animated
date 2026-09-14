import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PencilIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PencilIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PencilIcon = ({ className, size = 28, ...props }: PencilIconProps) => {
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
        
          <path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499" />
        
      </svg>
    </div>
  );
};

PencilIcon.displayName = "PencilIcon";

export { PencilIcon };
