import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Input } from "./ui/input";
import { Kbd } from "./ui/kbd";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  resultCount?: number;
  totalCount?: number;
};

const SearchInput = ({
  searchValue,
  setSearchValue,
  resultCount,
  totalCount,
}: SearchInputProps) => {
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

  const showResultCount =
    searchValue.length > 0 &&
    resultCount !== undefined &&
    totalCount !== undefined;

  return (
    <div className="sticky top-0 z-50 border-neutral-200 border-y bg-background/80 backdrop-blur-md dark:border-neutral-800 dark:bg-background/80">
      <div className="view-container flex items-center gap-2 border-neutral-200 py-2 xl:border-x dark:border-neutral-800">
        <Input
          aria-label="Search icons"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="h-10 bg-white dark:bg-[#0A0A0A]"
          inputMode="search"
          leadingIcon={
            <MagnifyingGlassIcon
              className="size-5 text-neutral-400"
              strokeWidth={2}
            />
          }
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search icons..."
          ref={inputRef}
          role="search"
          spellCheck="false"
          trailingIcon={
            showResultCount ? (
              <span className="font-mono text-neutral-400 text-sm">
                {resultCount}/{totalCount}
              </span>
            ) : (
              <Kbd className="border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                ⌘ K
              </Kbd>
            )
          }
          value={searchValue}
        />
      </div>
    </div>
  );
};

export { SearchInput };
