import { ClientResponseDTO } from "@api/client/dtos/ClientResponseDTO";
import { createContext } from "react";

interface MainContextProps {
  query: string;
  setQuery: (q: string) => void;
  categoryIndex: number;
  setCategoryIndex: (c: number) => void;
  data: ClientResponseDTO[];
  categories: ClientResponseDTO[];
}

const mainContext = createContext<MainContextProps>({
  query: "",
  setQuery: () => undefined,
  categoryIndex: -1,
  setCategoryIndex: () => undefined,
  data: [],
  categories: [],
});

export default mainContext;
