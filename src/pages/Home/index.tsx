import { useEffect, useRef } from "react";

import AppBar from "@components/AppBar";
import ProductCard from "@components/ProductCard";

import useMainContext from "@hooks/useMainContext";

export default function Home() {
  const { categoryIndex, data } = useMainContext();

  const headerRef = useRef<HTMLDivElement | null>(null);
  const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  //TODO: fix animation appbar
  //TODO: fix height top animation

  useEffect(() => {
    if (headerRef.current && categoryRefs.current[categoryIndex]) {
      categoryRefs.current[categoryIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [categoryIndex]);

  return (
    <main>
      <div ref={headerRef}>
        <AppBar />
      </div>
      <div className="flex flex-col gap-2 p-4 mt-28">
        {data.map((category, index) => (
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
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
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
