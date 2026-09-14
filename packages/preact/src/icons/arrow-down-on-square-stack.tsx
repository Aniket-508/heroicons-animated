import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowDownOnSquareStackIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownOnSquareStackIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowDownOnSquareStackIcon = ({ className, size = 28, ...props }: ArrowDownOnSquareStackIconProps) => {
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
        
        <path d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5" />
        <path
          d="M7.5 11.25L10.5 14.25M10.5 14.25L13.5 11.25M10.5 14.25L10.5 1.5"
        />
        <path d="M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5" />
      
      </svg>
    </div>
  );
};

ArrowDownOnSquareStackIcon.displayName = "ArrowDownOnSquareStackIcon";

export { ArrowDownOnSquareStackIcon };
