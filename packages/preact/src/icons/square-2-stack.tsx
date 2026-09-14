import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface Square2StackIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Square2StackIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Square2StackIcon = ({ className, size = 28, ...props }: Square2StackIconProps) => {
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
          d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25"
        />
        <path
          d="M16.5 8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
        />
      
      </svg>
    </div>
  );
};

Square2StackIcon.displayName = "Square2StackIcon";

export { Square2StackIcon };
