import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChatBubbleOvalLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChatBubbleOvalLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChatBubbleOvalLeftIcon = ({ className, size = 28, ...props }: ChatBubbleOvalLeftIconProps) => {
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
        
        <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
      
      </svg>
    </div>
  );
};

ChatBubbleOvalLeftIcon.displayName = "ChatBubbleOvalLeftIcon";

export { ChatBubbleOvalLeftIcon };
