import clsx from "clsx";
import { Search } from "lucide-react";

interface AppBarProps {
  data: { id: string; name: string }[];
  indexSelected: number;
  onChangeSelected: (index: number) => void;
}

export default function AppBar({
  data,
  indexSelected,
  onChangeSelected,
}: AppBarProps) {
  return (
    <header className="fixed right-0 left-0 top-0 bg-white">
      <div className="flex items-center justify-between p-4 shadow">
        <div />
        <h1 className="uppercase font-semibold text-sm text-gray-700">
          Nome do Local
        </h1>
        <Search className="text-red-400" />
      </div>
      <nav className="flex px-4 items-center overflow-x-auto scrollbar-hide shadow">
        {data.map(({ id, name }, index) => {
          const isSelected = index === indexSelected;
          return (
            <div
              key={id}
              onClick={(e) => {
                onChangeSelected(index);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
              }}
            >
              <div
                className={clsx(
                  "flex h-12 flex-col justify-center px-2.5 font-semibold transition-colors duration-300 whitespace-nowrap",
                  isSelected ? "text-red-400" : "text-gray-400"
                )}
              >
                <div>{name}</div>
              </div>

              <div
                className={clsx("h-1 rounded transition-colors duration-300", {
                  ["bg-red-400"]: isSelected,
                })}
              />
            </div>
          );
        })}
      </nav>
      <div className="shadow h-16 p-2 px-4">
        <div className="relative h-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <Search className="text-red-400" />
          </div>
          <input
            type="text"
            className="block w-full h-full rounded border p-1.5 ps-12 bg-gray-100 font-semibold"
            placeholder="Buscar no cardápio"
          />
        </div>
      </div>
    </header>
  );
}
