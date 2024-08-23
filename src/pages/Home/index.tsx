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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <></>

        <div className="shadow p-4 flex justify-between h-[162px] sm:h-[172px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col mb-5 flex-1">
              <h3 className="text-gray-700 font-medium mb-4">
                Nome do Produto
              </h3>
              <span className="text-gray-500 text-sm h-6 font-thin mb-2.5 max-h-max">
                Descrição do Produto Descrição do Produto Descrição do Produto
                Descrição do Produto Descrição do Produto Descrição do Produto
                Descrição do Produto Descrição do Produto
              </span>
            </div>
            <span className="text-gray-700 font-medium">R$ 55,99</span>
          </div>
          <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
            <img
              alt="Nome Produto"
              src="https://static.ifood-static.com.br/image/upload/t_low/pratos/4b154a0f-7489-4164-a281-2ad3a9d5009b/202308291821_U3T2_i.jpg"
            />
          </div>
        </div>
      </div>

      <></>
    </main>
  );
}
