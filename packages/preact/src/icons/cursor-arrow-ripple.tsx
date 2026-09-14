import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CursorArrowRippleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CursorArrowRippleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CursorArrowRippleIcon = ({ className, size = 28, ...props }: CursorArrowRippleIconProps) => {
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
          d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
        />
        <path
          d="M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999"
        />
        <path
          d="M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999"
        />
      
      </svg>
    </div>
  );
};

CursorArrowRippleIcon.displayName = "CursorArrowRippleIcon";

export { CursorArrowRippleIcon };
