import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface DocumentChartBarIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DocumentChartBarIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DocumentChartBarIcon = ({ className, size = 28, ...props }: DocumentChartBarIconProps) => {
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
        
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        <path
          d="M9 16.5v.75"
        />
        <path
          d="M12 14.25v3"
        />
        <path
          d="M15 12v5.25"
        />
      
      </svg>
    </div>
  );
};

DocumentChartBarIcon.displayName = "DocumentChartBarIcon";

export { DocumentChartBarIcon };
