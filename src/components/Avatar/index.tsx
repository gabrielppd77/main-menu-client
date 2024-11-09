import clsx from "clsx";
import { Store } from "lucide-react";

interface AvatarProps {
  alt?: string;
  image?: string;
}

export default function Avatar({
  alt = "Imagem do avatar",
  image,
}: AvatarProps) {
  const classNameProp = clsx(
    "size-20",
    "flex justify-center items-center",
    "rounded-full border p-[2px]"
  );

  if (image) {
    return <img alt={alt} src={image} className={classNameProp} />;
  }

  return (
    <div className={classNameProp}>
      <Store className="size-14 text-gray-400" />
    </div>
  );
}
