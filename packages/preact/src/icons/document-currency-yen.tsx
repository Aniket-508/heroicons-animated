import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface DocumentCurrencyYenIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DocumentCurrencyYenIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DocumentCurrencyYenIcon = ({ className, size = 28, ...props }: DocumentCurrencyYenIconProps) => {
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
        
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        <path
          d="M9.75 11.25l2.25 3m0 0 2.25-3m-2.25 3v4.5M9.75 15h4.5m-4.5 2.25h4.5"
        />
      
      </svg>
    </div>
  );
};

DocumentCurrencyYenIcon.displayName = "DocumentCurrencyYenIcon";

export { DocumentCurrencyYenIcon };
