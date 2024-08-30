import { createContext } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

interface MainContextProps {
  query: string;
  setQuery: (q: string) => void;
  categoryIndex: number;
  setCategoryIndex: (c: number) => void;
  data: Category[];
}

const mainContext = createContext<MainContextProps>({
  query: "",
  setQuery: () => undefined,
  categoryIndex: -1,
  setCategoryIndex: () => undefined,
  data: [],
});

export default mainContext;
