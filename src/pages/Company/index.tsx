import { useRef, useState } from "react";

import Divider from "@components/Divider";
import LinearProgress from "@components/LinearProgress";

import HeaderCompany, {
  HeaderCompanySkeleton,
} from "./components/HeaderCompany";
import NavCategory from "./components/NavCategory";
import SearchField from "./components/SearchField";
import ProductCard, { ProductCardSkeleton } from "./components/ProductCard";

import { useParams, useNavigate } from "react-router-dom";
import { useClientGetCompanyData } from "@api/client/useClientGetCompanyData";

import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";
import { extractRequestError } from "@utils/utils";
import { HttpStatusCode } from "axios";
import { fireAlertError } from "@utils/alert";

export default function Company() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  // const [isShowAppBar, setIsShowAppBar] = useState(false);
  // const [isOpenSearchDialog, setOpenSearchDialog] = useState(false);

  const { companyPath } = useParams();
  const navigate = useNavigate();

  const {
    data: _d,
    isLoading,
    isFetching,
    error,
  } = useClientGetCompanyData({
    params: {
      companyPath: companyPath || "",
    },
  });

  const errExtracted = extractRequestError(error);

  if (errExtracted) {
    if (errExtracted.status === HttpStatusCode.NotFound) {
      navigate("/");
    } else {
      fireAlertError(error);
    }
  }

  const data = _d || ({} as ClientResponseDTO);
  const categories = data.categories || [];

  const productsRef = useRef<HTMLDivElement | null>(null);
  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (productsRef.current) {
  //       const { top } = productsRef.current.getBoundingClientRect();
  //       if (top < 150) {
  //         setIsShowAppBar(true);
  //       } else {
  //         setIsShowAppBar(false);
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (categoryRefs.current[categoryIndex]) {
  //     const offsetPosition =
  //       categoryRefs.current[categoryIndex].getBoundingClientRect().top +
  //       window.scrollY -
  //       165;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [categoryIndex]);

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

  // function handleOpenSearchDialog() {
  //   setOpenSearchDialog(true);
  //   document.body.style.overflow = "hidden";
  // }

  // function handleCloseSearchDialog() {
  //   setOpenSearchDialog(false);
  //   document.body.style.overflow = "auto";
  // }

  return (
    <main>
      {isLoading ? (
        <HeaderCompanySkeleton />
      ) : (
        <HeaderCompany
          companyImage={data.companyUrlImage}
          companyName={data.companyName}
          companyDescription={data.companyDescription}
        />
      )}

      <Divider />

      <LinearProgress active={isFetching} />

      <NavCategory
        categoryIndex={categoryIndex}
        changeCategoryIndex={setCategoryIndex}
        isLoading={isLoading}
        categories={data?.categories || []}
      />

      <SearchField onClick={() => undefined} />

      {/* <AppBar
        // categoryIndex={categoryIndex}
        // changeCategoryIndex={setCategoryIndex}
        isShow={true}
        // onClickSearchField={handleOpenSearchDialog}
      /> */}

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
