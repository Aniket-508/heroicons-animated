import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface NewspaperIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface NewspaperIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const NewspaperIcon = ({ className, size = 28, ...props }: NewspaperIconProps) => {
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
        
          <path d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
          <path
            d="M6 7.5h3v3H6v-3Z"
          />
          <path
            d="M12 7.5h1.5"
          />
          <path
            d="M12 10.5h1.5"
          />
          <path
            d="M6 13.5h7.5"
          />
          <path
            d="M6 16.5h7.5"
          />
        
      </svg>
    </div>
  );
};

NewspaperIcon.displayName = "NewspaperIcon";

export { NewspaperIcon };
