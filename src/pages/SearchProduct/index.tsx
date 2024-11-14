import { useEffect, useState } from "react";

import SearchField from "@pages/Company/components/SearchField";
import { useNavigate, useParams } from "react-router-dom";
import { useClientGetCompanyData } from "@api/client/useClientGetCompanyData";
import ListProducts from "@pages/Company/components/ListProducts";
import LinearProgress from "@components/LinearProgress";

export default function SearchProduct() {
  const [query, setQuery] = useState("");
  const [queryDebounced, setQueryDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQueryDebounced(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!queryDebounced) return;
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryDebounced]);

  const { companyPath } = useParams();

  const navigate = useNavigate();

  const {
    data: _d,
    isLoading,
    isFetching,
    refetch,
  } = useClientGetCompanyData({
    enabled: false,
    params: {
      companyPath: companyPath || "",
      query,
    },
  });
  const categories = _d?.categories || [];

  return (
    <main className="animate-fadeIn flex flex-col">
      <header className="p-1 flex items-center">
        <div className="flex-1">
          <SearchField value={query} onChange={setQuery} />
        </div>
        <button className="text-red-400 px-2" onClick={() => navigate(-1)}>
          Cancelar
        </button>
      </header>
      <LinearProgress active={isFetching} />

      {categories.length > 0 ? (
        <ListProducts data={categories} isLoading={isLoading} />
      ) : (
        <div className="mt-12 p-8 flex flex-col gap-4 items-center">
          <img
            src="/searching.svg"
            className="size-52"
            alt="Icone de procura"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-gray-900 text-center text-lg">
              Qual o pedido de hoje?
            </h1>
            <h2 className="text-gray-900 text-center">
              Digite alguma palavra relacionada ao prato que você procura
            </h2>
          </div>
        </div>
      )}
    </main>
  );
}
