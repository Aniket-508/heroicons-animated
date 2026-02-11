/// <reference types="vite/client" />

interface ImportMeta {
  glob: (
    pattern: string,
    options?: { import?: string; eager?: boolean }
  ) => Record<string, unknown>;
}
