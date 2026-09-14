import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface LockOpenIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LockOpenIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const LockOpenIcon = ({ className, size = 28, ...props }: LockOpenIconProps) => {
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
            d="M13.5 10.5V6.75C13.5 4.26472 15.5147 2.25 18 2.25C20.4853 2.25 22.5 4.26472 22.5 6.75V10.5"
          />
          <path d="M3.75 21.75H14.25C15.4926 21.75 16.5 20.7426 16.5 19.5V12.75C16.5 11.5074 15.4926 10.5 14.25 10.5H3.75C2.50736 10.5 1.5 11.5074 1.5 12.75V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75Z" />
        
      </svg>
    </div>
  );
};

LockOpenIcon.displayName = "LockOpenIcon";

export { LockOpenIcon };
