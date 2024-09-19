import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";
import { ClientCategoryResponseDTO } from "@api/client/dtos/ClientCategoryResponseDTO";
import { createContext } from "react";

interface MainContextProps {
  query: string;
  setQuery: (q: string) => void;
  categoryIndex: number;
  setCategoryIndex: (c: number) => void;
  data: ClientResponseDTO;
  categoriesNav: ClientCategoryResponseDTO[];
  categoriesMain: ClientCategoryResponseDTO[];
  isLoading: boolean;
  isFetching: boolean;
  isShowSearchField: boolean;
  setShowSearchField: (d: boolean) => void;
}

const mainContext = createContext<MainContextProps>({
  query: "",
  setQuery: () => undefined,
  categoryIndex: -1,
  setCategoryIndex: () => undefined,
  data: {} as ClientResponseDTO,
  categoriesNav: [],
  categoriesMain: [],
  isLoading: false,
  isFetching: false,
  isShowSearchField: false,
  setShowSearchField: () => undefined,
});

export default mainContext;
