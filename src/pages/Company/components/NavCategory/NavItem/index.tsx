import clsx from "clsx";

export function NavItemSkeleton() {
  return (
    <div className="h-12 flex items-center animate-pulse px-2">
      <div className="h-2.5 bg-gray-300 rounded-full w-32" />
    </div>
  );
}

interface NavItemProps {
  isSelected: boolean;
  name: string;
}

export default function NavItem({ isSelected, name }: NavItemProps) {
  return (
    <div>
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
}
