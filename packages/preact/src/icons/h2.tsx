import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface H2IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface H2IconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const H2Icon = ({ className, size = 28, ...props }: H2IconProps) => {
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
        
          <path d="M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
          <path
            d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12"
          />
        
      </svg>
    </div>
  );
};

H2Icon.displayName = "H2Icon";

export { H2Icon };
