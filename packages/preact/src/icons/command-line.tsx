import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CommandLineIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CommandLineIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CommandLineIcon = ({ className, size = 28, ...props }: CommandLineIconProps) => {
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
        
          <path d="M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z" />
          <path d="M6.75 7.5L9.75 9.75L6.75 12" />
          <path
            d="M11.25 12H14.25"
          />
        
      </svg>
    </div>
  );
};

CommandLineIcon.displayName = "CommandLineIcon";

export { CommandLineIcon };
