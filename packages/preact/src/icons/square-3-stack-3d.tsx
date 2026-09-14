import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface Square3Stack3dIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Square3Stack3dIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Square3Stack3dIcon = ({ className, size = 28, ...props }: Square3Stack3dIconProps) => {
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
        
        <path d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      
      </svg>
    </div>
  );
};

Square3Stack3dIcon.displayName = "Square3Stack3dIcon";

export { Square3Stack3dIcon };
