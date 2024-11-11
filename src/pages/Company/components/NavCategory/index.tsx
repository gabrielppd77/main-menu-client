import { useEffect, useRef } from "react";

import clsx from "clsx";

import NavItemSkeleton from "./NavItem";

import { ClientCategoryResponseDTO } from "@api/client/dtos/ClientCategoryResponseDTO";

interface NavCategoryProps {
  isLoading: boolean;
  categoryIndex: number;
  changeCategoryIndex: (index: number) => void;
  categories: ClientCategoryResponseDTO[];
}

export default function NavCategory({
  isLoading,
  categoryIndex,
  changeCategoryIndex,
  categories,
}: NavCategoryProps) {
  const navRef = useRef<HTMLInputElement | null>(null);
  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

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
  );
}
