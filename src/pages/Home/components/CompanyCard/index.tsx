import Avatar from "@components/Avatar";
import clsx from "clsx";

export function CompanyCardSkeleton() {
  return (
    <div className={clsx("animate-pulse", "h-28 p-4 rounded-md flex gap-2")}>
      <Avatar />
      <div className="flex items-center">
        <div className="h-3 bg-gray-300 rounded-full w-20" />
      </div>
    </div>
  );
}

interface CompanyCardProps {
  name: string;
  image?: string;
  onClick: () => void;
}

export default function CompanyCard({
  name,
  image,
  onClick,
}: CompanyCardProps) {
  return (
    <div
      onClick={() => onClick()}
      className={clsx(
        "h-28 p-4 rounded-md flex gap-2",
        "hover:shadow-md hover:scale-105 hover:cursor-pointer transition ease-in-out duration-200"
      )}
    >
      <Avatar image={image} />
      <div className="flex items-center">
        <div className="text-gray-700 font-medium text-md">{name}</div>
      </div>
    </div>
  );
}
