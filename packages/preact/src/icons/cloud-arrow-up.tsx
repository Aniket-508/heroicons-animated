import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CloudArrowUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CloudArrowUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CloudArrowUpIcon = ({ className, size = 28, ...props }: CloudArrowUpIconProps) => {
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
          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3"
        />
      
      </svg>
    </div>
  );
};

CloudArrowUpIcon.displayName = "CloudArrowUpIcon";

export { CloudArrowUpIcon };
