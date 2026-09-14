import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CpuChipIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CpuChipIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CpuChipIcon = ({ className, size = 28, ...props }: CpuChipIconProps) => {
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
            d="M8.25 3V4.5"
          />
          <path
            d="M12 3V4.5"
          />
          <path
            d="M15.75 3V4.5"
          />
          <path
            d="M4.5 8.25H3"
          />
          <path
            d="M4.5 12H3"
          />
          <path
            d="M4.5 15.75H3"
          />
          <path
            d="M21 8.25H19.5"
          />
          <path
            d="M21 12H19.5"
          />
          <path
            d="M21 15.75H19.5"
          />
          <path
            d="M8.25 19.5V21"
          />
          <path
            d="M12 19.5V21"
          />
          <path
            d="M15.75 19.5V21"
          />
          <path d="M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z" />
        
      </svg>
    </div>
  );
};

CpuChipIcon.displayName = "CpuChipIcon";

export { CpuChipIcon };
