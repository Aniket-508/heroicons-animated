"use client";

import { getIconList } from "@heroicons-animated/react";
import { useMemo, useRef } from "react";
import type { Icon } from "@/actions/get-icons";
import { Card, CardActions } from "@/components/card";
import { useFramework } from "@/providers/framework";

type Props = {
  icon: Icon;
};

const IconCard = ({ icon }: Props) => {
  const { framework } = useFramework();
  const animationRef = useRef<{
    startAnimation: () => void;
    stopAnimation: () => void;
  }>(null);

  // For now, we only render React icons
  // Vue and Svelte icons would require a different rendering approach
  const IconComponent = useMemo(() => {
    return getIconList().find((item) => item.name === icon.name)?.icon;
  }, [icon.name]);

  if (!IconComponent) {
    return null;
  }

  return (
    <Card
      animationRef={animationRef}
      className="w-full min-[880px]:w-auto"
      onMouseEnter={() => animationRef.current?.startAnimation()}
      onMouseLeave={() => animationRef.current?.stopAnimation()}
    >
      <IconComponent
        className="flex items-center justify-center [&>svg]:size-12 [&>svg]:text-neutral-800 dark:[&>svg]:text-neutral-100"
        ref={animationRef}
      />
      <CardActions alwaysVisible name={icon.name} />
    </Card>
  );
};

export { IconCard };
