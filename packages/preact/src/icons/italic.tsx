import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ItalicIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ItalicIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ItalicIcon = ({ className, size = 28, ...props }: ItalicIconProps) => {
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
            d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
          />
        
      </svg>
    </div>
  );
};

ItalicIcon.displayName = "ItalicIcon";

export { ItalicIcon };
