import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { Input } from "./ui/input";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const blurInput = () => {
    inputRef.current?.blur();
  };

  useHotkeys(
    "mod+K",
    () => {
      focusInput();
    },
    {
      preventDefault: true,
      enabled: true,
      enableOnFormTags: true,
      enableOnContentEditable: true,
    }
  );

  useHotkeys(
    "escape",
    () => {
      setSearchValue("");
      blurInput();
    },
    {
      preventDefault: true,
      enableOnFormTags: true,
      enableOnContentEditable: true,
    }
  );

  return (
    <div className="sticky top-0 z-50 mb-1 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] dark:bg-[#0A0A0A]">
      <div className="view-container">
        <Input
          aria-label="Search icons"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="bg-white py-8 ring-0 dark:bg-[#0A0A0A]"
          inputMode="search"
          leadingIcon={
            <MagnifyingGlassIcon
              className="size-4 text-neutral-400"
              strokeWidth={2.5}
            />
          }
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search icons..."
          ref={inputRef}
          role="search"
          spellCheck="false"
          trailingIcon={
            <div className="hidden items-center gap-0.5 md:flex">
              <kbd className="h-5 min-w-7 font-sans text-neutral-400 text-xs">
                ⌘K
              </kbd>
            </div>
          }
          value={searchValue}
        />
      </div>
    </div>
  );
};

export { SearchInput };
