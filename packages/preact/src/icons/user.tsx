import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface UserIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UserIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const UserIcon = ({ className, size = 28, ...props }: UserIconProps) => {
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
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        
      </svg>
    </div>
  );
};

UserIcon.displayName = "UserIcon";

export { UserIcon };
