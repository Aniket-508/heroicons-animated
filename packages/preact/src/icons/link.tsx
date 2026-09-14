import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface LinkIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LinkIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const LinkIcon = ({ className, size = 28, ...props }: LinkIconProps) => {
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
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        
      </svg>
    </div>
  );
};

LinkIcon.displayName = "LinkIcon";

export { LinkIcon };
