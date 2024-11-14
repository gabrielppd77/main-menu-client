import { useEffect, useState, useRef } from "react";

import { ChevronLeft, Search } from "lucide-react";

import Divider from "@components/Divider";
import IconButton from "@components/IconButton";

import HeaderCompany, {
  HeaderCompanySkeleton,
} from "./components/HeaderCompany";
import NavCategory from "./components/NavCategory";

import { useParams, useNavigate } from "react-router-dom";
import { useClientGetCompanyData } from "@api/client/useClientGetCompanyData";

import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";
import { extractRequestError } from "@utils/utils";
import { HttpStatusCode } from "axios";
import { fireAlertError } from "@utils/alert";
import clsx from "clsx";
import ListProducts from "./components/ListProducts";

export default function Company() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [isShowAppBar, setIsShowAppBar] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (productsRef.current) {
        const { top } = productsRef.current.getBoundingClientRect();
        if (top < 100) {
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
    if (categoryIndex === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
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
    }
  }, [categoryIndex]);

  function goToHome() {
    navigate("/");
  }

  function goToSearchProduct() {
    navigate(`/${companyPath}/search`);
  }

  return (
    <main>
      <header
        className={clsx(
          "bg-white z-10 fixed right-0 left-0 top-0",
          "duration-300 ease-in-out",
          isShowAppBar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex items-center justify-between p-4 shadow">
          <IconButton onClick={goToHome}>
            <ChevronLeft />
          </IconButton>

          <h1 className="font-semibold text-sm text-gray-700">
            {isLoading ? (
              <div className="h-2.5 bg-gray-300 rounded-full w-32 animate-pulse" />
            ) : (
              data?.companyName || ""
            )}
          </h1>
          <IconButton onClick={goToSearchProduct}>
            <Search />
          </IconButton>
        </div>

        <NavCategory
          categoryIndex={categoryIndex}
          changeCategoryIndex={setCategoryIndex}
          isLoading={isLoading}
          isFetching={isFetching}
          categories={categories}
        />
      </header>

      <div className="absolute left-0 right-0 flex justify-between p-3 px-4">
        <IconButton onClick={goToHome}>
          <ChevronLeft />
        </IconButton>

        <IconButton onClick={goToSearchProduct}>
          <Search />
        </IconButton>
      </div>

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

      <NavCategory
        categoryIndex={categoryIndex}
        changeCategoryIndex={setCategoryIndex}
        isLoading={isLoading}
        isFetching={isFetching}
        categories={categories}
      />

      <ListProducts
        data={categories}
        isLoading={isLoading}
        categoryRefs={categoryRefs}
        ref={productsRef}
      />
    </main>
  );
}
