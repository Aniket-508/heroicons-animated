import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface StrikethroughIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface StrikethroughIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const StrikethroughIcon = ({ className, size = 28, ...props }: StrikethroughIconProps) => {
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
        
        <path d="M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617" />
        <path
          d="M3.75 12h16.5"
        />
      
      </svg>
    </div>
  );
};

StrikethroughIcon.displayName = "StrikethroughIcon";

export { StrikethroughIcon };
