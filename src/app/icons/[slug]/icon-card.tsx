"use client";

import { useRef } from "react";
import { Card, CardActions } from "@/components/card";
import { ICON_MAP } from "@/lib/icons";
import type { AnimatedIconHandle, IconManifestItem } from "@/types/icon";

type Props = {
  icon: IconManifestItem;
};

const IconCard = ({ icon }: Props) => {
  const animationRef = useRef<AnimatedIconHandle | null>(null);

  const Icon = ICON_MAP.get(icon.name);

  if (!Icon) {
    return null;
  }

  return (
    <Card
      animationRef={animationRef}
      className="w-full min-[880px]:w-auto"
      onMouseEnter={() => animationRef.current?.startAnimation()}
      onMouseLeave={() => animationRef.current?.stopAnimation()}
    >
      <Icon
        className="flex items-center justify-center [&>svg]:size-12 [&>svg]:text-neutral-800 dark:[&>svg]:text-neutral-100"
        ref={animationRef}
      />
      <CardActions alwaysVisible name={icon.name} />
    </Card>
  );
};

export { IconCard };
