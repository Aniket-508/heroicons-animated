import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface BoltSlashIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BoltSlashIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BoltSlashIcon = ({ className, size = 28, ...props }: BoltSlashIconProps) => {
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
        
          <path d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
        
      </svg>
    </div>
  );
};

BoltSlashIcon.displayName = "BoltSlashIcon";

export { BoltSlashIcon };
