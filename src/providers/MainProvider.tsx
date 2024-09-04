import { useState } from "react";
import mainContext from "@contexts/mainContext";

import { useClientGetAll } from "@api/client/useClientGetAll";

const Provider = mainContext.Provider;

interface MainProviderProps {
  children: React.ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  const [query, setQuery] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(-1);

  //TODO: Create loading in page.
  //TODO: Remove required of URL image.
  //TODO: Keep together CRUD category and Product.
  const { data: _d, isLoading, isFetching } = useClientGetAll();
  const _data = _d || [];

  const data = _data
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
        categories: _data,
      }}
    >
      {children}
    </Provider>
  );
}
