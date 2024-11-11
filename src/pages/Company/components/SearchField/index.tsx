import { Search } from "lucide-react";

interface SearchFieldProps {
  onClick: () => void;
}

export default function SearchField({ onClick }: SearchFieldProps) {
  return (
    <div
      onClick={onClick}
      className="shadow h-12 p-2 px-4 transform transition-transform duration-200 ease-out bg-white"
    >
      <div className="relative h-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <Search className="text-red-400" />
        </div>
        <input
          type="text"
          readOnly
          className="block w-full h-full rounded border p-1.5 ps-12 bg-gray-100 font-semibold focus:outline-none"
          placeholder="Buscar no cardápio"
        />
      </div>
    </div>
  );
}
