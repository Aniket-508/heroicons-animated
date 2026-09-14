import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ShareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ShareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ShareIcon = ({ className, size = 28, ...props }: ShareIconProps) => {
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
            d="M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071"
          />
          <circle
            cx="5.25"
            cy="12"
            r="2.25"
          />
          <circle
            cx="18.75"
            cy="4.5"
            r="2.25"
          />
          <circle
            cx="18.75"
            cy="19.5"
            r="2.25"
          />
        
      </svg>
    </div>
  );
};

ShareIcon.displayName = "ShareIcon";

export { ShareIcon };
