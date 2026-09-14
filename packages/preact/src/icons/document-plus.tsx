import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface DocumentPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DocumentPlusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DocumentPlusIcon = ({ className, size = 28, ...props }: DocumentPlusIconProps) => {
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
        
        <path d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z" />
        <path
          d="M12 11.25v6"
        />
        <path
          d="M9 14.25H15"
        />
      
      </svg>
    </div>
  );
};

DocumentPlusIcon.displayName = "DocumentPlusIcon";

export { DocumentPlusIcon };
