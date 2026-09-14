import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ShieldExclamationIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ShieldExclamationIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ShieldExclamationIcon = ({ className, size = 28, ...props }: ShieldExclamationIconProps) => {
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
        
        <path d="M12 1.964A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Z" />
        <g
        >
          <path d="M12 9v3.75" />
          <path d="M12 15.75h.008v.008H12v-.008Z" />
        </g>
      
      </svg>
    </div>
  );
};

ShieldExclamationIcon.displayName = "ShieldExclamationIcon";

export { ShieldExclamationIcon };
