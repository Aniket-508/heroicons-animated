import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ServerIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ServerIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ServerIcon = ({ className, size = 28, ...props }: ServerIconProps) => {
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
        
          <path d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3" />
          <path
            d="M18.75 17.25h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
          />
        
      </svg>
    </div>
  );
};

ServerIcon.displayName = "ServerIcon";

export { ServerIcon };
