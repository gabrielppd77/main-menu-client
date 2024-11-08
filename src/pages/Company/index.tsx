import { useRef, useEffect, useState } from "react";

import AppBar from "@components/AppBar";
import ProductCard from "@components/ProductCard";
import ProductCardSkeleton from "@components/ProductCardSkeleton";

import { useParams } from "react-router-dom";
import { useClientGetCompanyData } from "@api/client/useClientGetCompanyData";

import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";
import SearchDialog from "@components/SearchDialog";

export default function Company() {
  const [categoryIndex, setCategoryIndex] = useState(-1);
  const [isShowAppBar, setIsShowAppBar] = useState(false);
  const [isOpenSearchDialog, setOpenSearchDialog] = useState(false);

  const { companyPath } = useParams();

  const { data: _d, isLoading } = useClientGetCompanyData({
    params: {
      companyPath: companyPath || "",
    },
  });
  const data = _d || ({} as ClientResponseDTO);
  const categories = data.categories || [];

  const productsRef = useRef<HTMLDivElement | null>(null);
  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (productsRef.current) {
        const { top } = productsRef.current.getBoundingClientRect();
        if (top < 150) {
          setIsShowAppBar(true);
        } else {
          setIsShowAppBar(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (categoryRefs.current[categoryIndex]) {
      const offsetPosition =
        categoryRefs.current[categoryIndex].getBoundingClientRect().top +
        window.scrollY -
        165;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [categoryIndex]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let foundVisibleCategoryIndex: number | null = null;

  //     Object.keys(categoryRefs.current).forEach((key, index) => {
  //       const ref = categoryRefs.current[parseInt(key, 10)];
  //       if (ref) {
  //         // const rect = ref.getBoundingClientRect();
  //         // console.log({ rect });
  //         // if (rect.top <= window.innerHeight) {
  //         //   foundVisibleCategoryIndex = index;
  //         // }

  //         let { top } = ref.getBoundingClientRect();
  //         let { innerHeight } = window;

  //         top -= 150;
  //         innerHeight = (innerHeight - 150) / 2;

  //         if (top > 0 && top < innerHeight) {
  //           foundVisibleCategoryIndex = index;
  //         }
  //       }
  //     });

  //     if (foundVisibleCategoryIndex !== null) {
  //       setScrollingBar(true);
  //       setCategoryIndex(foundVisibleCategoryIndex);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  function handleOpenSearchDialog() {
    setOpenSearchDialog(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseSearchDialog() {
    setOpenSearchDialog(false);
    document.body.style.overflow = "auto";
  }

  return (
    <main>
      <div className="h-48 w-full flex justify-center items-center px-2">
        <div className="flex items-center gap-2">
          <img
            className="bg-blue-50 h-24 w-24 rounded-full"
            alt="Imagem da Empresa"
            src={data.companyUrlImage}
          />
          <div>
            <h1 className="uppercase font-semibold text-lg text-gray-700">
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

      <div className="h-0.5 w-full bg-gray-200" />

      <AppBar
        categoryIndex={categoryIndex}
        changeCategoryIndex={setCategoryIndex}
        isShow={isShowAppBar}
        onClickSearchField={handleOpenSearchDialog}
      />

      <SearchDialog
        isOpen={isOpenSearchDialog}
        onClose={handleCloseSearchDialog}
      />

      <div className="flex flex-col gap-2 p-4" ref={productsRef}>
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : categories.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => (categoryRefs.current[index] = el)}
              >
                <div className="text-gray-700 font-medium text-lg line-clamp-2 mb-2">
                  {category.name}
                </div>
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
