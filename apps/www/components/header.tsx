"use client";

import { cn, LINK } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import Link from "next/link";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { GithubStarsButton } from "@/components/github-button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useFramework } from "@/providers/framework";

interface FilledHeartIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FilledHeartIconProps {
  size?: number;
  className?: string;
}

const HEART_VARIANTS: Variants = {
  normal: { scale: 1 },
  animate: { scale: [1, 1.08, 1] },
};

const FilledHeartIcon = forwardRef<FilledHeartIconHandle, FilledHeartIconProps>(
  ({ className, size = 16 }, ref) => {
    const controls = useAnimation();

    useImperativeHandle(ref, () => ({
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    }));

    return (
      <motion.svg
        animate={controls}
        className={cn(className)}
        fill="currentColor"
        height={size}
        initial="normal"
        transition={{
          duration: 0.45,
          repeat: 2,
        }}
        variants={HEART_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </motion.svg>
    );
  }
);

FilledHeartIcon.displayName = "FilledHeartIcon";

const Header = () => {
  const heartRef = useRef<FilledHeartIconHandle>(null);
  const { framework, setFramework } = useFramework();

  const handleMouseEnter = useCallback(() => {
    heartRef.current?.startAnimation();
  }, []);

  const handleMouseLeave = useCallback(() => {
    heartRef.current?.stopAnimation();
  }, []);

  return (
    <header className="h-(--header-height) border-neutral-200 xl:border-b dark:border-neutral-800">
      <div className="view-container flex h-full w-full justify-between gap-4 border-neutral-200 xl:border-x dark:border-neutral-800">
        <Link
          aria-label="Heroicons Animated - Home"
          className="mr-auto flex items-center gap-2 font-sans text-base focus-within:outline-offset-4 focus-visible:outline-1 focus-visible:outline-primary max-[524px]:translate-y-[-2px] min-[395px]:text-xl"
          href="/"
          tabIndex={0}
        >
          <Logo className="w-6 text-primary min-[395px]:w-8" />
          heroicons-animated
        </Link>
        <div className="ml-auto flex w-full flex-1 flex-wrap-reverse items-center justify-end gap-2">
          <a
            aria-label="Sponsor Project"
            className="supports-[corner-shape:squircle]:corner-squircle flex size-9 items-center justify-center gap-1 rounded-[14px] bg-white font-sans text-[#3F3F47] text-sm underline-offset-4 focus-within:outline-offset-2 hover:underline focus-visible:outline-1 focus-visible:outline-primary supports-[corner-shape:squircle]:rounded-[20px] sm:size-auto sm:bg-transparent sm:pr-1 dark:bg-white/10 dark:text-[#FAFAFA] sm:dark:bg-transparent"
            href={LINK.SPONSOR}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            <FilledHeartIcon
              className="text-primary"
              ref={heartRef}
              size={16}
            />
            <span className="hidden sm:inline">Sponsor Project</span>
          </a>
          <ThemeToggle />
          <GithubStarsButton />
        </div>
      </div>
    </header>
  );
};

export { Header };
