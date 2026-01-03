import Link from "next/link";

import { GithubStartsButton } from "@/components/github-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LINK } from "@/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  type?: "default";
};

const Logo = ({ className, type = "default" }: LogoProps) => {
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
          fill="#8B5CF6"
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

const Header = () => {
  return (
    <header className="mx-auto mt-[25px] w-full max-w-[1292px] px-4 font-mono">
      <div className="flex h-full w-full justify-between gap-4">
        <Link
          aria-label="Heroicons Animated - Home"
          className="mr-auto flex h-[42px] items-center gap-2 font-sans text-base focus-within:outline-offset-4 focus-visible:outline-1 focus-visible:outline-primary max-[524px]:translate-y-[-2px] min-[395px]:text-xl"
          href="/"
          tabIndex={0}
        >
          <Logo className="w-6 text-primary data-[type='christmas']:translate-y-[-4px] min-[395px]:w-8" />
          heroicons-animated
        </Link>
        <div className="ml-auto flex w-full flex-1 flex-wrap-reverse items-center justify-end gap-2">
          <a
            aria-label="Sponsor Project"
            className="flex items-center gap-1 pr-1 font-sans text-[#3F3F47] text-sm underline-offset-4 focus-within:outline-offset-4 hover:underline focus-visible:outline-1 focus-visible:outline-primary dark:text-[#FAFAFA]"
            href={LINK.SPONSOR}
            tabIndex={0}
            target="_blank"
          >
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-primary"
                d="M7.72238 13.5321L7.71838 13.5297L7.70318 13.5217C7.38749 13.3499 7.07746 13.1679 6.77358 12.976C6.04907 12.5202 5.35871 12.0122 4.70798 11.456C3.23598 10.1864 1.59998 8.28165 1.59998 6.00005C1.60005 5.25562 1.8309 4.52952 2.26074 3.92172C2.69058 3.31393 3.29827 2.85433 4.00014 2.60622C4.702 2.35811 5.46353 2.33369 6.17985 2.53631C6.89618 2.73894 7.53207 3.15865 7.99998 3.73765C8.46788 3.15865 9.10377 2.73894 9.8201 2.53631C10.5364 2.33369 11.2979 2.35811 11.9998 2.60622C12.7017 2.85433 13.3094 3.31393 13.7392 3.92172C14.1691 4.52952 14.3999 5.25562 14.4 6.00005C14.4 8.28165 12.7648 10.1864 11.292 11.456C10.3674 12.246 9.36371 12.9382 8.29678 13.5217L8.28158 13.5297L8.27758 13.5321H8.27598C8.19097 13.5771 8.09627 13.6007 8.00007 13.6008C7.90388 13.601 7.80911 13.5776 7.72398 13.5329L7.72238 13.5321Z"
              />
            </svg>
            Sponsor Project
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <GithubStartsButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
