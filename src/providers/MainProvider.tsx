import { useState } from "react";
import mainContext from "@contexts/mainContext";

import { useClientGetAll } from "@api/client/useClientGetAll";
import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";

const Provider = mainContext.Provider;

interface MainProviderProps {
  children: React.ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  const [query, setQuery] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(-1);
  const [isShowSearchField, setShowSearchField] = useState(false);

  const { data: _d, isLoading, isFetching } = useClientGetAll();
  const data = _d || ({} as ClientResponseDTO);

  const _categories = _d?.categories || [];

  const categories = _categories
    .map((d) => ({
      ...d,
      products: d.products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((d) => d.products.length > 0);

  return (
    <Provider
      value={{
        query,
        setQuery,
        categoryIndex,
        setCategoryIndex,
        data,
        categoriesNav: _categories,
        categoriesMain: categories,
        isLoading,
        isFetching,
        isShowSearchField,
        setShowSearchField,
      }}
    >
      {children}
    </Provider>
  );
}
