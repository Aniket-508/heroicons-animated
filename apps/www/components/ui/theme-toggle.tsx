"use client";

import {
  MoonIcon,
  type MoonIconHandle,
  SunIcon,
  type SunIconHandle,
} from "@heroicons-animated/react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

type Theme = "light" | "dark" | "system";

const KEYS = ["ctrl+u", "meta+u"];

const ICON_VARIANTS = {
  initial: { opacity: 0, scale: 0.6, filter: "blur(3px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.6, filter: "blur(3px)" },
};

const ThemeToggle = () => {
  const { setTheme, theme: currentTheme, resolvedTheme } = useTheme();
  const sunRef = useRef<SunIconHandle>(null);
  const moonRef = useRef<MoonIconHandle>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  const handleChangeTheme = (theme: Theme) => {
    if (theme === currentTheme) return;

    setTheme(theme);
  };

  useHotkeys(
    KEYS,
    () => {
      handleChangeTheme(nextTheme);
    },
    { preventDefault: true }
  );

  const handleMouseEnter = () => {
    sunRef.current?.startAnimation();
    moonRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    sunRef.current?.stopAnimation();
    moonRef.current?.stopAnimation();
  };

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="supports-[corner-shape:squircle]:corner-squircle flex size-9 cursor-pointer items-center justify-center rounded-[14px] bg-white focus-within:outline-offset-2 focus-visible:outline-1 focus-visible:outline-primary supports-[corner-shape:squircle]:rounded-[20px] dark:bg-white/10"
      onClick={() => handleChangeTheme(nextTheme)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      suppressHydrationWarning
      tabIndex={0}
      type="button"
    >
      <AnimatePresence initial={false} mode="popLayout">
        {mounted && (
          <motion.span
            animate="animate"
            className="flex items-center justify-center"
            exit="exit"
            initial="initial"
            key={isDark ? "moon" : "sun"}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
            variants={ICON_VARIANTS}
          >
            {isDark ? (
              <MoonIcon aria-hidden="true" ref={moonRef} size={16} />
            ) : (
              <SunIcon aria-hidden="true" ref={sunRef} size={16} />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export { ThemeToggle };
