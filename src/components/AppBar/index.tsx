import clsx from "clsx";

import SearchField from "@pages/Company/components/SearchField";

interface AppBarProps {
  isShow: boolean;
  categoryIndex: number;
  changeCategoryIndex: (index: number) => void;
  onClickSearchField: () => void;
}

export default function AppBar({ isShow, onClickSearchField }: AppBarProps) {
  const categories = data?.categories || [];

  return (
    <header
      className={clsx(
        "bg-white z-10 fixed right-0 left-0 top-0",
        "duration-300 ease-in-out",
        isShow ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="flex items-center justify-center p-4 shadow">
        <h1 className="uppercase font-semibold text-sm text-gray-700">
          {isLoading ? (
            <div className="h-2.5 bg-gray-300 rounded-full w-32 animate-pulse" />
          ) : (
            data?.companyName || ""
          )}
        </h1>
      </div>
    </header>
  );
}
