import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface InformationCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface InformationCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const InformationCircleIcon = ({ className, size = 28, ...props }: InformationCircleIconProps) => {
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
        
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        <g
        >
          <path d="M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75" />
          <path d="M12 8.25H12.0075V8.2575H12V8.25Z" />
        </g>
      
      </svg>
    </div>
  );
};

InformationCircleIcon.displayName = "InformationCircleIcon";

export { InformationCircleIcon };
