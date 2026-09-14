import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface DevicePhoneMobileIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DevicePhoneMobileIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DevicePhoneMobileIcon = ({ className, size = 28, ...props }: DevicePhoneMobileIconProps) => {
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
        
        <path d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5" />
      
      </svg>
    </div>
  );
};

DevicePhoneMobileIcon.displayName = "DevicePhoneMobileIcon";

export { DevicePhoneMobileIcon };
