import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface UserCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UserCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const UserCircleIcon = ({ className, size = 28, ...props }: UserCircleIconProps) => {
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
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        
      </svg>
    </div>
  );
};

UserCircleIcon.displayName = "UserCircleIcon";

export { UserCircleIcon };
