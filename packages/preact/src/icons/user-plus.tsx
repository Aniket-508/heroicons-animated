import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface UserPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UserPlusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const UserPlusIcon = ({ className, size = 28, ...props }: UserPlusIconProps) => {
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
        
          <path d="M13.75 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          <path
            d="M18 7.5v6"
          />
          <path
            d="M15 10.5h6"
          />
        
      </svg>
    </div>
  );
};

UserPlusIcon.displayName = "UserPlusIcon";

export { UserPlusIcon };
