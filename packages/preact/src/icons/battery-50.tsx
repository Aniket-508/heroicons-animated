import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface Battery50IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Battery50IconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Battery50Icon = ({ className, size = 28, ...props }: Battery50IconProps) => {
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
        
          <defs>
            <clipPath id={clipId}>
              <rect
                height="4.5"
                x="4.5"
                y="10.5"
              />
            </clipPath>
          </defs>
          <path d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21" />
          <path d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
          <path d="M4.5 10.5h6.75V15H4.5v-4.5Z" />
          <path
            d="M4.5 10.5h6.75V15H4.5v-4.5Z"
            fill="currentColor"
            stroke="none"
          />
        
      </svg>
    </div>
  );
};

Battery50Icon.displayName = "Battery50Icon";

export { Battery50Icon };
