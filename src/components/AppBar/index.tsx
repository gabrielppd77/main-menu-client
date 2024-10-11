import { useEffect, useRef } from "react";

import clsx from "clsx";

import LinearProgress from "@components/LinearProgress";
import NavItemSkeleton from "./NavItemSkeleton";

import { useClientGetCompanyDataQuery } from "@api/client/useClientGetCompanyData";
import SearchField from "@components/SearchField";

interface AppBarProps {
  isShow: boolean;
  categoryIndex: number;
  changeCategoryIndex: (index: number) => void;
  onClickSearchField: () => void;
}

export default function AppBar({
  isShow,
  categoryIndex,
  changeCategoryIndex,
  onClickSearchField,
}: AppBarProps) {
  const navRef = useRef<HTMLInputElement | null>(null);
  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const { data, isLoading, isFetching } = useClientGetCompanyDataQuery();

  const categories = data?.categories || [];

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
    <header
      className={clsx(
        "bg-white z-10 fixed right-0 left-0 top-0",
        "duration-300 ease-in-out",
        isShow ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="flex items-center justify-center p-4 shadow">
        <h1 className="uppercase font-semibold text-sm text-gray-700">
          {isLoading ? (
            <div className="h-2.5 bg-gray-300 rounded-full w-32 animate-pulse" />
          ) : (
            data?.companyName || ""
          )}
        </h1>
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
                  onClick={() => changeCategoryIndex(index)}
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
      <SearchField onClick={onClickSearchField} />
    </header>
  );
}
