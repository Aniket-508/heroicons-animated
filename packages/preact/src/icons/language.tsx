import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface LanguageIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LanguageIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const LanguageIcon = ({ className, size = 28, ...props }: LanguageIconProps) => {
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
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        
      </svg>
    </div>
  );
};

LanguageIcon.displayName = "LanguageIcon";

export { LanguageIcon };
