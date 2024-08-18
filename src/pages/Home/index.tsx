import { useState } from "react";

import AppBar from "@components/AppBar";

const data = [
  {
    id: "1",
    name: "Atenção!",
  },
  {
    id: "2",
    name: "Promoções de Arrasar!",
  },
  {
    id: "3",
    name: "Pizza",
  },
  {
    id: "4",
    name: "Almoço",
  },
  {
    id: "5",
    name: "Jantinha",
  },
  {
    id: "6",
    name: "Hamburguer",
  },
  {
    id: "7",
    name: "Combos",
  },
  {
    id: "8",
    name: "Sobremesas",
  },
  {
    id: "9",
    name: "Churrasco",
  },
];

export default function Home() {
  const [indexSelected, setIndexSelected] = useState(-1);

  return (
    <main>
      <AppBar
        data={data}
        indexSelected={indexSelected}
        onChangeSelected={setIndexSelected}
      />
      <div>
        <h3>Nome do Produto</h3>
        <h5>Descrição do Produto</h5>
        <image />
      </div>
    </main>
  );
}
