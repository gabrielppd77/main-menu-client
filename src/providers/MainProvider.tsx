import { useState } from "react";
import mainContext from "@contexts/mainContext";

const data = [
  {
    id: "1",
    name: "Atenção!",
    products: [
      {
        id: "12321",
        title: "Chesse Salada",
        description:
          "Pão brioche com gergelim, burguer angus 160g, queijo , alfabece, tomate, mulho cebloa e cenoura batata palha queijo , alfabece, tomate, mulho cebloa e cenoura batata palha",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202308291821_U3T2_i.jpg",
        price: 59.9,
      },
      {
        id: "124242",
        title: "Hamburguer",
        description:
          "Pão brioche com gergelim, burguer angus 160g, queijo , alfabece, tomate, mulho cebloa e cenoura batata palha queijo , alfabece, tomate, mulho cebloa e cenoura batata palha",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202308291821_U3T2_i.jpg",
        price: 40.9,
      },
    ],
  },
  {
    id: "2",
    name: "Promoções de Arrasar!",
    products: [
      {
        id: "124242",
        title: "Hamburguer",
        description:
          "Pão brioche com gergelim, burguer angus 160g, queijo , alfabece, tomate, mulho cebloa e cenoura batata palha queijo , alfabece, tomate, mulho cebloa e cenoura batata palha",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202308291821_U3T2_i.jpg",
        price: 40.9,
      },
    ],
  },
  {
    id: "3",
    name: "Pizza",
    products: [
      {
        id: "4242",
        title: "Pizza Lombo",
        description: "Pizza de catupiri com lombo",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202405282115_3M8L_i.jpg",
        price: 21.9,
      },
    ],
  },
  {
    id: "4",
    name: "Almoço",
    products: [
      {
        id: "124242",
        title: "Hamburguer",
        description:
          "Pão brioche com gergelim, burguer angus 160g, queijo , alfabece, tomate, mulho cebloa e cenoura batata palha queijo , alfabece, tomate, mulho cebloa e cenoura batata palha",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202308291821_U3T2_i.jpg",
        price: 40.9,
      },
    ],
  },
  {
    id: "5",
    name: "Jantinha",
    products: [
      {
        id: "4242",
        title: "Pizza Lombo",
        description: "Pizza de catupiri com lombo",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202405282115_3M8L_i.jpg",
        price: 21.9,
      },
    ],
  },
  {
    id: "6",
    name: "Hamburguer",
    products: [
      {
        id: "4242",
        title: "Pizza Lombo",
        description: "Pizza de catupiri com lombo",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202405282115_3M8L_i.jpg",
        price: 21.9,
      },
    ],
  },
  {
    id: "7",
    name: "Combos",
    products: [
      {
        id: "4242",
        title: "Pizza Lombo",
        description: "Pizza de catupiri com lombo",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202405282115_3M8L_i.jpg",
        price: 21.9,
      },
    ],
  },
  {
    id: "8",
    name: "Sobremesas",
    products: [
      {
        id: "4242",
        title: "Nuggets",
        description: "Pizza de catupiri com lombo",
        imageUrl:
          "https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202405282115_3M8L_i.jpg",
        price: 21.9,
      },
    ],
  },
];

const Provider = mainContext.Provider;

interface MainProviderProps {
  children: React.ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  const [query, setQuery] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(-1);
  return (
    <Provider
      value={{ query, setQuery, categoryIndex, setCategoryIndex, data }}
    >
      {children}
    </Provider>
  );
}
