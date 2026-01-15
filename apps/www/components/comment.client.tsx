"use client";

import { useRef } from "react";

import { ANALYTIC_EVENT } from "@/components/analytics";
import {
  ArrowTopRightOnSquareIcon,
  type ArrowTopRightOnSquareIconHandle,
} from "@heroicons-animated/react";

const CommentAuthorLinkClient = () => {
  return (
    <a
      className="inline-block underline underline-offset-3 transition-[decoration-color,color] duration-100 focus-within:outline-offset-0 hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:outline-1 focus-visible:outline-primary"
      href="https://aniketpawar.com/"
      onClick={() => {
        if (typeof window !== "undefined" && window.umami) {
          window.umami.track(ANALYTIC_EVENT.COMMENT_AUTHOR_LINK);
        }
      }}
      rel="noopener external"
      tabIndex={0}
      target="_blank"
    >
      aniket
    </a>
  );
};

const CommentLucideAnimatedLinkClient = () => {
  return (
    <a
      className="inline-block underline underline-offset-3 transition-[decoration-color,color] duration-100 focus-within:outline-offset-0 hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:outline-1 focus-visible:outline-primary"
      href="https://lucide-animated.com/"
      onClick={() => {
        if (typeof window !== "undefined" && window.umami) {
          window.umami.track(ANALYTIC_EVENT.COMMENT_LUCIDE_ANIMATED_LINK);
        }
      }}
      rel="noopener external"
      tabIndex={0}
      target="_blank"
    >
      lucide-animated by dmytro
    </a>
  );
};

const CommentAnimationsDevLinkClient = () => {
  return (
    <a
      className="inline-block underline underline-offset-3 transition-[decoration-color,color] duration-100 focus-within:outline-offset-0 hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:outline-1 focus-visible:outline-primary"
      href="https://www.svg.guide/"
      onClick={() => {
        if (typeof window !== "undefined" && window.umami) {
          window.umami.track(ANALYTIC_EVENT.COMMENT_SVG_GUIDE_LINK);
        }
      }}
      rel="noopener external"
      tabIndex={0}
      target="_blank"
    >
      svg.guide
    </a>
  );
};

const CommentButtonClient = () => {
  const arrowRef = useRef<ArrowTopRightOnSquareIconHandle>(null);

  return (
    <a
      className="supports-[corner-shape:squircle]:corner-squircle flex w-fit cursor-pointer items-center justify-center gap-1 rounded-[8px] bg-primary px-[12px] py-[4px] font-sans text-sm text-white transition-[background-color] duration-100 hover:bg-[color-mix(in_oklab,var(--color-primary),black_10%)] focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-1 supports-[corner-shape:squircle]:rounded-[12px] max-[445px]:w-full"
      href="https://www.svg.guide/"
      onClick={() => {
        if (typeof window !== "undefined" && window.umami) {
          window.umami.track(ANALYTIC_EVENT.COMMENT_BUTTON_CLICK);
        }
      }}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
      rel="noopener external"
      tabIndex={0}
      target="_blank"
    >
      Take the course
      <ArrowTopRightOnSquareIcon ref={arrowRef} size={14} />
    </a>
  );
};

export {
  CommentAuthorLinkClient,
  CommentLucideAnimatedLinkClient,
  CommentAnimationsDevLinkClient,
  CommentButtonClient,
};
