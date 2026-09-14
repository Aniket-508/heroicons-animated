import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CurrencyRupeeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CurrencyRupeeIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CurrencyRupeeIcon = ({ className, size = 28, ...props }: CurrencyRupeeIconProps) => {
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
        
        <path d="M15 8.25L9 8.25M15 11.25H9M12 17.25L9 14.25H10.5C12.1569 14.25 13.5 12.9069 13.5 11.25C13.5 9.59315 12.1569 8.25 10.5 8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
      
      </svg>
    </div>
  );
};

CurrencyRupeeIcon.displayName = "CurrencyRupeeIcon";

export { CurrencyRupeeIcon };
