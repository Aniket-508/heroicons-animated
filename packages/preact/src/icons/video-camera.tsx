import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface VideoCameraIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface VideoCameraIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const VideoCameraIcon = ({ className, size = 28, ...props }: VideoCameraIconProps) => {
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
        
          <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" />
          <circle
            cx="5"
            cy="7.5"
            fill="red"
            r="1"
            stroke="none"
          />
        
      </svg>
    </div>
  );
};

VideoCameraIcon.displayName = "VideoCameraIcon";

export { VideoCameraIcon };
