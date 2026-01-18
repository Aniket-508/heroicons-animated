import { cn } from "@heroicons-animated/shared";

type LogoProps = {
  className?: string;
  type?: "default";
};

export const Logo = ({ className, type = "default" }: LogoProps) => {
  if (type === "default") {
    return (
      <svg
        aria-hidden="true"
        className={cn(className)}
        data-type="default"
        fill="none"
        viewBox="0 0 156 166"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m78.091 0 5.967 5.676c15.038 14.306 35.323 23.067 57.663 23.067.356 0 .711-.002 1.065-.006l6.363-.08 1.988 6.072a102.026 102.026 0 0 1 5.045 31.782c0 47.391-32.269 87.19-75.928 98.477l-2.163.559-2.163-.559C32.27 153.701 0 113.902 0 66.511c0-11.085 1.769-21.772 5.045-31.782l1.988-6.072 6.363.08c.354.004.71.006 1.065.006 22.34 0 42.625-8.761 57.664-23.067L78.09 0Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        <circle cx="58" cy="78" fill="white" r="14" />
        <circle cx="98" cy="78" fill="white" r="14" />
        <circle cx="61" cy="82" fill="black" r="5.5" />
        <circle cx="95" cy="82" fill="black" r="5.5" />
      </svg>
    );
  }

  return null;
};
