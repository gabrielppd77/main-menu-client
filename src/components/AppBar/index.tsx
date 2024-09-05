import { useEffect, useRef, useState } from "react";

import useMainContext from "@hooks/useMainContext";

import clsx from "clsx";
import { Search, X } from "lucide-react";

import LinearProgress from "@components/LinearProgress";

import NavItemSkeleton from "./NavItemSkeleton";

export default function AppBar() {
  const navRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const {
    query,
    setQuery,
    categoryIndex,
    setCategoryIndex,
    categories,
    isFetching,
    isLoading,
  } = useMainContext();

  const [isShowSearchInput, setShowSearchinput] = useState(false);

  useEffect(() => {
    if (isShowSearchInput) {
      inputRef.current?.focus();
    } else {
      setQuery("");
    }
  }, [isShowSearchInput, setQuery]);

  useEffect(() => {
    if (navRef.current && categoryRefs.current[categoryIndex]) {
      const element = categoryRefs.current[categoryIndex];

      const windowWidth = navRef.current.clientWidth;
      const elementWidth = element.offsetWidth;
      const elementLeft = element.offsetLeft;

      const scrollToPositionX =
        elementLeft - windowWidth / 2 + elementWidth / 2;

      navRef.current.scrollTo({
        left: scrollToPositionX,
        behavior: "smooth",
      });
    }
  }, [categoryIndex]);

  return (
    <header className="fixed right-0 left-0 top-0 bg-white">
      <div className="flex items-center justify-between p-4 shadow">
        <div />
        <h1 className="uppercase font-semibold text-sm text-gray-700">
          Nome do Local
        </h1>
        <Search
          className="text-red-400"
          onClick={() => setShowSearchinput((prev) => !prev)}
        />
      </div>
      <nav
        ref={navRef}
        className="flex px-4 items-center overflow-x-auto scrollbar-hide shadow"
      >
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <NavItemSkeleton key={index} />
            ))
          : categories.map(({ id, name }, index) => {
              const isSelected = index === categoryIndex;
              return (
                <div
                  key={id}
                  ref={(el) => (categoryRefs.current[index] = el)}
                  onClick={() => setCategoryIndex(index)}
                >
                  <div
                    className={clsx(
                      "flex h-12 flex-col justify-center px-2.5 font-semibold transition-colors duration-300 whitespace-nowrap",
                      isSelected ? "text-red-400" : "text-gray-400"
                    )}
                  >
                    <div>{name}</div>
                  </div>

                  <div
                    className={clsx(
                      "h-1 rounded transition-colors duration-300",
                      {
                        ["bg-red-400"]: isSelected,
                      }
                    )}
                  />
                </div>
              );
            })}
      </nav>
      <div className="h-1.5">{isFetching && <LinearProgress />}</div>
      <div className="relative">
        <div
          className={clsx(
            "shadow h-16 p-2 px-4 absolute top-0 left-0 right-0 transform transition-transform duration-200 ease-out bg-white",
            isShowSearchInput ? "translate-y-0" : "-translate-y-[300%]"
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
          <div className="absolute inset-y-0 end-0 flex items-center pe-7 text-red-400">
            <X onClick={() => setShowSearchinput(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
