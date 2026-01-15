"use client";

import type { Framework } from "@heroicons-animated/shared";
import { useQueryState } from "nuqs";
import { createContext, type ReactNode, useContext } from "react";

type FrameworkContextType = {
  framework: Framework;
  setFramework: (framework: Framework) => void;
};

const FrameworkContext = createContext<FrameworkContextType | undefined>(
  undefined
);

export function FrameworkProvider({ children }: { children: ReactNode }) {
  const [framework, setFramework] = useQueryState<Framework>("framework", {
    defaultValue: "react",
    clearOnDefault: false,
  });

  return (
    <FrameworkContext.Provider value={{ framework, setFramework }}>
      {children}
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const context = useContext(FrameworkContext);
  if (context === undefined) {
    throw new Error("useFramework must be used within a FrameworkProvider");
  }
  return context;
}
