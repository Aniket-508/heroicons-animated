import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface FaceFrownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FaceFrownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FaceFrownIcon = ({ className, size = 28, ...props }: FaceFrownIconProps) => {
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
        
          <circle cx="12" cy="12" r="9" />
          <path
            d="M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
          />
          <path
            d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
          />
          <path
            d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
          />
        
      </svg>
    </div>
  );
};

FaceFrownIcon.displayName = "FaceFrownIcon";

export { FaceFrownIcon };
