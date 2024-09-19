import { useEffect, useRef } from "react";
import clsx from "clsx";

import { Search, X } from "lucide-react";
import useMainContext from "@hooks/useMainContext";

interface SearchFieldProps {
  fixPosition: boolean;
}

export default function SearchField({ fixPosition }: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { query, setQuery, isShowSearchField, setShowSearchField } =
    useMainContext();

  useEffect(() => {
    if (query) {
      setShowSearchField(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (isShowSearchField) {
      inputRef.current?.focus();
    }
  }, [isShowSearchField]);

  return (
    <div
      className={clsx(
        "shadow h-16 p-2 px-4 transform transition-transform duration-200 ease-out bg-white",
        !fixPosition &&
          (isShowSearchField ? "translate-y-0" : "-translate-y-[400%]")
      )}
    >
      <div className="relative h-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <Search className="text-red-400" />
        </div>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="block w-full h-full rounded border p-1.5 ps-12 bg-gray-100 font-semibold focus:outline-none"
          placeholder="Buscar no cardápio"
        />
      </div>
      {query && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-7 text-red-400">
          <X onClick={() => setQuery("")} />
        </div>
      )}
    </div>
  );
}
