import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface UnderlineIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UnderlineIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const UnderlineIcon = ({ className, size = 28, ...props }: UnderlineIconProps) => {
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
            d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5"
          />
          <path
            d="M3.745 20.246h16.5"
          />
        
      </svg>
    </div>
  );
};

UnderlineIcon.displayName = "UnderlineIcon";

export { UnderlineIcon };
