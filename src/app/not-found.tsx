"use client";

import { HomeIcon, type HomeIconHandle } from "@heroicons-animated/react";
import Link from "next/link";
import { useRef } from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  const homeRef = useRef<HomeIconHandle>(null);

  return (
    <main className="view-container flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center border-neutral-200 px-4 py-16 xl:border-x dark:border-neutral-800">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className="font-mono text-8xl">404</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for might have been moved or
            doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link
            className="supports-[corner-shape:squircle]:corner-squircle inline-flex w-fit cursor-pointer items-center justify-center gap-1 rounded-[8px] bg-primary px-[12px] py-[4px] font-sans text-sm text-white transition-[background-color] duration-100 hover:bg-primary/90 focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-1 supports-[corner-shape:squircle]:rounded-[12px]"
            href="/"
            onMouseEnter={() => homeRef.current?.startAnimation()}
            onMouseLeave={() => homeRef.current?.stopAnimation()}
          >
            <HomeIcon ref={homeRef} size={14} />
            Go Home
          </Link>
        </EmptyContent>
      </Empty>
    </main>
  );
}
