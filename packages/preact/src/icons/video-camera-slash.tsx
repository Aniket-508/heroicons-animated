import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface VideoCameraSlashIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface VideoCameraSlashIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const VideoCameraSlashIcon = ({ className, size = 28, ...props }: VideoCameraSlashIconProps) => {
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
        
        <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
      
      </svg>
    </div>
  );
};

VideoCameraSlashIcon.displayName = "VideoCameraSlashIcon";

export { VideoCameraSlashIcon };
