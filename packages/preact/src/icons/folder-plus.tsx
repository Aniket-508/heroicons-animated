import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface FolderPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FolderPlusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FolderPlusIcon = ({ className, size = 28, ...props }: FolderPlusIconProps) => {
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
        
          <path d="M10.94 4.19a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          <path
            d="M12 10.5v6"
          />
          <path
            d="M9 13.5h6"
          />
        
      </svg>
    </div>
  );
};

FolderPlusIcon.displayName = "FolderPlusIcon";

export { FolderPlusIcon };
