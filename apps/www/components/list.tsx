"use client";

import { getIconList } from "@heroicons-animated/react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useDeferredValue, useMemo, useRef } from "react";
import type { Icon } from "@/actions/get-icons";
import { Card, CardActions, CardTitle } from "@/components/card";
import { SearchInput } from "./search-input";

type Props = {
  icons: Icon[];
};

// For now, we only render React icons in the list view
// Vue and Svelte icons can be viewed on individual icon pages
const ICON_MAP = new Map(getIconList().map((item) => [item.name, item.icon]));

const IconItem = ({
  icon,
  Icon,
}: {
  icon: Icon;
  Icon: React.ElementType | undefined;
}) => {
  const animationRef = useRef<{
    startAnimation: () => void;
    stopAnimation: () => void;
  }>(null);

  if (!Icon) {
    return null;
  }

  return (
    <Link
      className="rounded-[20px] focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
      href={`/icons/${icon.name}`}
    >
      <Card
        animationRef={animationRef}
        className="transition-shadow [contain-intrinsic-size:auto_180px] [content-visibility:auto] hover:shadow-sm"
        key={icon.name}
        onMouseEnter={() => animationRef.current?.startAnimation()}
        onMouseLeave={() => animationRef.current?.stopAnimation()}
      >
        <Icon
          className="flex items-center justify-center [&>svg]:size-10 [&>svg]:text-neutral-800 dark:[&>svg]:text-neutral-100"
          ref={animationRef}
        />
        <CardTitle>{icon.name}</CardTitle>
        <CardActions {...icon} />
      </Card>
    </Link>
  );
};

const IconsList = ({ icons }: Props) => {
  const [searchValue, setSearchValue] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });
  const deferredSearchValue = useDeferredValue(searchValue);

  const fuse = useMemo(
    () =>
      new Fuse(icons, {
        keys: [
          { name: "name", weight: 3 },
          { name: "keywords", weight: 2 },
        ],
        threshold: 0.3,
        ignoreLocation: true,
        findAllMatches: true,
        isCaseSensitive: false,
        minMatchCharLength: 2,
      }),
    [icons]
  );

  const filteredIcons = useMemo(() => {
    if (!deferredSearchValue.trim()) return icons;
    return fuse.search(deferredSearchValue).map((result) => result.item);
  }, [fuse, icons, deferredSearchValue]);

  return (
    <>
      <SearchInput
        resultCount={filteredIcons.length}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        totalCount={icons.length}
      />
      <div className="view-container grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 border-neutral-200 pt-2 pb-[60px] xl:border-x dark:border-neutral-800">
        {filteredIcons.length === 0 && (
          <div className="col-span-full pt-10 text-center text-neutral-500 text-sm">
            No icons found
          </div>
        )}
        {filteredIcons.map((icon) => (
          <IconItem
            Icon={ICON_MAP.get(icon.name) ?? undefined}
            icon={icon}
            key={icon.name}
          />
        ))}
      </div>
    </>
  );
};

export { IconsList };
