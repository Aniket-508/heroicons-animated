import Script from "next/script";

const ANALYTIC_EVENT = {
  HEADER_GITHUB: "header-github",
  ICON_COPY: "icon-copy",
  ICON_COPY_TERMINAL: "icon-copy-terminal",
  ICON_OPEN_IN_V0: "icon-open-in-v0",
  COMMENT_AUTHOR_LINK: "comment-author-link",
  COMMENT_LUCIDE_ANIMATED_LINK: "comment-lucide-animated-link",
  COMMENT_ANIMATIONS_DEV_LINK: "comment-animations-dev-link",
  COMMENT_BUTTON_CLICK: "comment-button-click",
} as const;

const Analytics = () => {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      data-website-id="44fee883-c580-4bb0-a818-5df02b4b4005"
      src="https://cloud.umami.is/script.js"
      strategy="afterInteractive"
    />
  );
};

export { Analytics, ANALYTIC_EVENT };
