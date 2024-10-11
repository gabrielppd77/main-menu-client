interface ProductCardProps {
  name: string;
  description: string;
  urlImage?: string;
  price: string;
}

export default function ProductCard({
  name,
  description,
  urlImage,
  price,
}: ProductCardProps) {
  return (
    <div className="shadow rounded flex p-2 h-[130px]">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-700 font-normal line-clamp- mb-2">{name}</h3>
          <span className="text-gray-500 text-xs font-thin line-clamp-2">
            {description}
          </span>
        </div>
        <span className="text-gray-700 font-normal">{price}</span>
      </div>
      {urlImage && (
        <img
          className="rounded h-full w-[110px]"
          alt="Nome Produto"
          src={urlImage}
        />
      )}
    </div>
  );
}
