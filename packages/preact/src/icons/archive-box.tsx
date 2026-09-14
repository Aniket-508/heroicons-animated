import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArchiveBoxIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArchiveBoxIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArchiveBoxIcon = ({ className, size = 28, ...props }: ArchiveBoxIconProps) => {
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
            d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
          />
          <path
            d="M20.25 7.5L19.6246 18.1321"
          />
          <path
            d="M3.75 7.5L4.37542 18.1321"
          />
          <path
            d="M9.99976 11.25H13.9998"
          />
          <path
            d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
          />
        
      </svg>
    </div>
  );
};

ArchiveBoxIcon.displayName = "ArchiveBoxIcon";

export { ArchiveBoxIcon };
