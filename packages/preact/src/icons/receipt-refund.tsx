import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ReceiptRefundIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ReceiptRefundIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ReceiptRefundIcon = ({ className, size = 28, ...props }: ReceiptRefundIconProps) => {
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
        
        <path d="M19.5 4.75699V21.75L15.75 20.25L12 21.75L8.25 20.25L4.5 21.75V4.75699C4.5 3.649 5.30608 2.70014 6.40668 2.57241C8.24156 2.35947 10.108 2.25 12 2.25C13.892 2.25 15.7584 2.35947 17.5933 2.57241C18.6939 2.70014 19.5 3.649 19.5 4.75699Z" />
        <g>
          <path d="M8.25 9.75H13.125C14.5747 9.75 15.75 10.9253 15.75 12.375C15.75 13.8247 14.5747 15 13.125 15H12" />
          <path d="M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12" />
        </g>
      
      </svg>
    </div>
  );
};

ReceiptRefundIcon.displayName = "ReceiptRefundIcon";

export { ReceiptRefundIcon };
