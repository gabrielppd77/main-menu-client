import { useEffect, useRef } from "react";

import LinearProgress from "@components/LinearProgress";

import NavItem, { NavItemSkeleton } from "./NavItem";

import { ClientCategoryResponseDTO } from "@api/client/dtos/ClientCategoryResponseDTO";
import Divider from "@components/Divider";

interface NavCategoryProps {
  isLoading: boolean;
  isFetching: boolean;
  categoryIndex: number;
  changeCategoryIndex: (index: number) => void;
  categories: ClientCategoryResponseDTO[];
}

export default function NavCategory({
  isLoading,
  isFetching,
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
    <div>
      <div className="-mt-1">
        <LinearProgress active={isFetching} />
      </div>

      <nav
        ref={navRef}
        className="flex px-2 items-center overflow-x-auto scrollbar-hide"
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
                  <NavItem name={name} isSelected={isSelected} />
                </div>
              );
            })}
      </nav>
      <Divider />
    </div>
  );
}
