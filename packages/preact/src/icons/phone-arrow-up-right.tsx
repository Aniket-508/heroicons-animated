import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PhoneArrowUpRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PhoneArrowUpRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PhoneArrowUpRightIcon = ({ className, size = 28, ...props }: PhoneArrowUpRightIconProps) => {
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
        
        <path d="M17.25 21.75c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        <path
          d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6"
        />
      
      </svg>
    </div>
  );
};

PhoneArrowUpRightIcon.displayName = "PhoneArrowUpRightIcon";

export { PhoneArrowUpRightIcon };
