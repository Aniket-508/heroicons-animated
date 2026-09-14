import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CloudArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CloudArrowDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CloudArrowDownIcon = ({ className, size = 28, ...props }: CloudArrowDownIconProps) => {
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
        
        <path d="M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        <path
          d="M12 9.75v6.75m0 0-3-3m3 3 3-3"
        />
      
      </svg>
    </div>
  );
};

CloudArrowDownIcon.displayName = "CloudArrowDownIcon";

export { CloudArrowDownIcon };
