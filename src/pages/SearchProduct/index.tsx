import { useState } from "react";

import SearchField from "@pages/Company/components/SearchField";
import { useNavigate, useParams } from "react-router-dom";
import { useClientGetCompanyData } from "@api/client/useClientGetCompanyData";

export default function SearchProduct() {
  const [query, setQuery] = useState("");

  const { companyPath } = useParams();

  const navigate = useNavigate();

  const {
    data: _d,
    isLoading,
    isFetching,
  } = useClientGetCompanyData({
    enabled: false,
    params: {
      companyPath: companyPath || "",
      query,
    },
  });

  return (
    <main className="animate-slideDown">
      <header className="p-1 flex items-center">
        <div className="flex-1">
          <SearchField value={query} onChange={setQuery} />
        </div>
        <button className="text-red-400 px-2" onClick={() => navigate(-1)}>
          Cancelar
        </button>
      </header>
    </main>
  );
}
