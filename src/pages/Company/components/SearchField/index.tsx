import { CircleX, Search } from "lucide-react";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <div className="h-14 p-2 px-4 transform transition-transform duration-200 ease-out bg-white">
      <div className="relative h-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
          <Search className="size-6 text-red-400" />
        </div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          className="block w-full h-full rounded border p-1.5 ps-14 bg-gray-100 font-normal focus:outline-none"
          placeholder="Buscar no cardápio"
          autoFocus
        />
        {value && (
          <div
            onClick={() => onChange("")}
            className="absolute inset-y-0 end-2 flex items-center"
          >
            <CircleX className="size-6 text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
}
