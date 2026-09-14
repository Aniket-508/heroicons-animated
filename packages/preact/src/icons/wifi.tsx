import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface WifiIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WifiIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const WifiIcon = ({ className, size = 28, ...props }: WifiIconProps) => {
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
        
          <path d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0" />
          <path
            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0"
          />
          <path
            d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0"
          />
          <path
            d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
          />
        
      </svg>
    </div>
  );
};

WifiIcon.displayName = "WifiIcon";

export { WifiIcon };
