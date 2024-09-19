import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import AppBar from "@components/AppBar";
import ProductCard from "@components/ProductCard";

import useMainContext from "@hooks/useMainContext";
import ProductCardSkeleton from "@components/ProductCardSkeleton";
import SearchField from "@components/SearchField";

export default function Home() {
  const [isShowAppBar, setIsShowAppBar] = useState(false);

  const { categoryIndex, data, categoriesMain, isLoading } = useMainContext();

  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const divRef = useRef<HTMLDivElement | null>(null);

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

  const handleScroll = () => {
    if (divRef.current) {
      const { top, bottom } = divRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (bottom < 0 || top > windowHeight) {
        setIsShowAppBar(true);
      } else {
        setIsShowAppBar(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="h-48 w-full flex justify-center items-center px-2">
        <div className="flex items-center gap-2">
          <img
            className="bg-blue-50 h-24 w-24 rounded-full"
            alt="Imagem da Empresa"
            src="https://scontent.fbhz1-2.fna.fbcdn.net/v/t39.30808-1/426538230_1298798618178007_2871720099802908690_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEFyr2n_3yuQPlcuvwlQoGAC_LYMZhJZpcL8tgxmElml2IwyHQFEIEq1W2sPYboEdst3wKgyfg-t6GnkFC4mle_&_nc_ohc=vbiIM2hRFGcQ7kNvgFCnLtu&_nc_ht=scontent.fbhz1-2.fna&_nc_gid=AWH7MxFyC1Z2BQ-pmHXbNwj&oh=00_AYCTHiuh-NsuecSdPYtmx152Dj2_YNa48Q3tg-UJ2aMDkA&oe=66F164DF"
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
              Sua mais nova churrascaria em Ubá - MG!
            </h3>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200" />
      <div className={clsx(isShowAppBar && "fixed right-0 left-0 top-0")}>
        {isShowAppBar && <AppBar />}
        <SearchField fixPosition={!isShowAppBar} />
      </div>
      <div className="flex flex-col gap-2 p-4">
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : categoriesMain.map((category, index) => (
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
