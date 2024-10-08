import { useRef, useEffect, useState } from "react";

// import clsx from "clsx";

import AppBar from "@components/AppBar";
import ProductCard from "@components/ProductCard";
import SearchField from "@components/SearchField";
import ProductCardSkeleton from "@components/ProductCardSkeleton";

// import useMainContext from "@hooks/useMainContext";
import { useParams } from "react-router-dom";
import { useClientGetCompanyData } from "@api/client/useClientGetCompanyData";

import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";

export default function Company() {
  const [query, setQuery] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(-1);
  const [isOpenSearchField, setOpenSearchField] = useState(false);
  // const [isShowAppBar, setIsShowAppBar] = useState(false);

  // const { categoryIndex, data, categoriesMain, isLoading } = useMainContext();

  const { companyPath } = useParams();

  const { data: _d, isLoading } = useClientGetCompanyData({
    params: {
      companyPath: companyPath || "",
    },
  });
  const data = _d || ({} as ClientResponseDTO);
  const _categories = data.categories || [];

  const categories = _categories
    .map((d) => ({
      ...d,
      products: d.products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((d) => d.products.length > 0);

  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  // const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (categoryRefs.current[categoryIndex]) {
      const offsetPosition =
        categoryRefs.current[categoryIndex].getBoundingClientRect().top +
        window.scrollY -
        125;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [categoryIndex]);

  // const handleScroll = () => {
  //   if (divRef.current) {
  //     const { top, bottom } = divRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
  //     if (bottom < 0 || top > windowHeight) {
  //       setIsShowAppBar(true);
  //     } else {
  //       setIsShowAppBar(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main>
      {/* <div className="h-48 w-full flex justify-center items-center px-2 fixed">
        <div className="flex items-center gap-2">
          <img
            className="bg-blue-50 h-24 w-24 rounded-full"
            alt="Imagem da Empresa"
            src={data.companyUrlImage}
          />
          <div>
            <h1
              className="uppercase font-semibold text-lg text-gray-700"
              ref={divRef}
            >
              {isLoading ? (
                <div className="h-2.5 bg-gray-300 rounded-full w-32 animate-pulse" />
              ) : (
                data.companyName
              )}
            </h1>
            <h3 className="text-gray-700 font-normal line-clamp-2 mb-2">
              {isLoading ? (
                <div className="h-2.5 bg-gray-300 rounded-full w-32 animate-pulse" />
              ) : (
                data.companyDescription
              )}
            </h3>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200" /> */}
      {/* <div className="right-0 left-0"> */}
      <SearchField
        isOpen={isOpenSearchField}
        query={query}
        setQuery={setQuery}
      />

      <AppBar
        categoryIndex={categoryIndex}
        changeCategoryIndex={setCategoryIndex}
        toggleOpenSearchField={() => setOpenSearchField((prev) => !prev)}
      />

      {/* </div> */}
      <div className="flex flex-col gap-2 p-4">
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : categories.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => (categoryRefs.current[index] = el)}
              >
                <h2 className="text-gray-700 font-medium text-lg line-clamp-2 mb-2">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      description={product.description}
                      urlImage={product.urlImage}
                      price={product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    />
                  ))}
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}
