import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface DeviceTabletIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DeviceTabletIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DeviceTabletIcon = ({ className, size = 28, ...props }: DeviceTabletIconProps) => {
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
        
        <path d="M10.5 19.5H13.5M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.5C19.5 3.25736 18.4926 2.25 17.25 2.25H6.75C5.50736 2.25 4.5 3.25736 4.5 4.5V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z" />
      
      </svg>
    </div>
  );
};

DeviceTabletIcon.displayName = "DeviceTabletIcon";

export { DeviceTabletIcon };
