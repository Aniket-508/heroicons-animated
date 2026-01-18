"use client";

import { getIconList } from "@heroicons-animated/react";
import Link from "next/link";
import { useMemo, useRef } from "react";
import type { Icon } from "@/actions/get-icons";
import { Card, CardTitle } from "@/components/card";
import { useFramework } from "@/providers/framework";

type Props = {
  currentIcon: Icon;
};

const ICON_MAP = new Map(getIconList().map((item) => [item.name, item.icon]));

const SimilarIconItem = ({
  icon,
  Icon,
}: {
  icon: Icon;
  Icon: React.ElementType | undefined;
}) => {
  const { framework } = useFramework();
  const animationRef = useRef<{
    startAnimation: () => void;
    stopAnimation: () => void;
  }>(null);

  if (!Icon) {
    return null;
  }

  const href =
    framework === "react"
      ? `/icons/${icon.name}`
      : `/icons/${icon.name}?framework=${framework}`;

  return (
    <Link
      className="rounded-[20px] focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
      href={href}
    >
      <Card
        animationRef={animationRef}
        className="pb-[50px] transition-shadow hover:shadow-sm"
        onMouseEnter={() => animationRef.current?.startAnimation()}
        onMouseLeave={() => animationRef.current?.stopAnimation()}
      >
        <Icon
          className="flex items-center justify-center [&>svg]:size-10 [&>svg]:text-neutral-800 dark:[&>svg]:text-neutral-100"
          ref={animationRef}
        />
        <CardTitle>{icon.name}</CardTitle>
      </Card>
    </Link>
  );
};

const SimilarIcons = ({ currentIcon }: Props) => {
  const similarIcons = useMemo(() => {
    const currentKeywords = new Set(currentIcon.keywords);

    const scored = getIconList()
      .filter((icon) => icon.name !== currentIcon.name)
      .map((icon) => {
        const sharedKeywords = icon.keywords.filter((kw) =>
          currentKeywords.has(kw)
        ).length;
        return { icon, score: sharedKeywords };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    return scored.map((item) => item.icon);
  }, [currentIcon]);

  if (similarIcons.length === 0) {
    return (
      <div className="view-container flex-1 border-neutral-200 pb-[60px] xl:border-x dark:border-neutral-800" />
    );
  }

  return (
    <div className="view-container border-neutral-200 pt-12 pb-[60px] xl:border-x xl:pt-4 dark:border-neutral-800">
      <h2 className="mb-4 font-sans text-xl">Similar Icons</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
        {similarIcons.map((icon) => (
          <SimilarIconItem
            Icon={ICON_MAP.get(icon.name) ?? undefined}
            icon={icon}
            key={icon.name}
          />
        ))}
      </div>
    </div>
  );
};

export { SimilarIcons };
