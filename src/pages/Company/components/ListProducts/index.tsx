import React from "react";

import ProductCard, { ProductCardSkeleton } from "./ProductCard";

import { ClientCategoryResponseDTO } from "@api/client/dtos/ClientCategoryResponseDTO";

interface ListProductsProps {
  isLoading: boolean;
  data: ClientCategoryResponseDTO[];
  categoryRefs?: React.MutableRefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
}

const ListProducts = React.forwardRef<HTMLDivElement, ListProductsProps>(
  ({ data, isLoading, categoryRefs }, ref) => {
    return (
      <div className="flex flex-col gap-2 p-4" ref={ref}>
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => categoryRefs && (categoryRefs.current[index] = el)}
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
    );
  }
);

export default ListProducts;
