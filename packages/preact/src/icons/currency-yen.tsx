import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CurrencyYenIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CurrencyYenIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CurrencyYenIcon = ({ className, size = 28, ...props }: CurrencyYenIconProps) => {
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
        
          <path d="M9 7.5L12 12M12 12L15 7.5M12 12V17.25M15 12H9M15 15H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        
      </svg>
    </div>
  );
};

CurrencyYenIcon.displayName = "CurrencyYenIcon";

export { CurrencyYenIcon };
