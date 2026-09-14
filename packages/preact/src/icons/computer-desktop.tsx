import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ComputerDesktopIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ComputerDesktopIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ComputerDesktopIcon = ({ className, size = 28, ...props }: ComputerDesktopIconProps) => {
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
          d="M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25Z"
        />
        <path d="M9 17.25V18.2574C9 19.053 8.68393 19.8161 8.12132 20.3787L7.5 21H16.5L15.8787 20.3787C15.3161 19.8161 15 19.053 15 18.2574V17.25M21 5.25V15C21 16.2426 19.9926 17.25 18.75 17.25H5.25C4.00736 17.25 3 16.2426 3 15V5.25M21 5.25C21 4.00736 19.9926 3 18.75 3H5.25C4.00736 3 3 4.00736 3 5.25M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25" />
      
      </svg>
    </div>
  );
};

ComputerDesktopIcon.displayName = "ComputerDesktopIcon";

export { ComputerDesktopIcon };
