import clsx from "clsx";

interface AvatarProps {
  alt?: string;
  image?: string;
  size?: "normal" | "large";
  squad?: boolean;
  isLoading?: boolean;
}

export default function Avatar({
  alt = "Imagem do avatar",
  image = "default-avatar.svg",
  size: _size = "normal",
  squad,
  isLoading,
}: AvatarProps) {
  const size = {
    ["normal"]: "size-24",
    ["large"]: "size-28",
  };

  return (
    <img
      className={clsx(size[_size], "rounded-full border p-[2px]", {
        ["rounded-md"]: squad,
      })}
      alt={alt}
      src={image}
    />
  );
}
