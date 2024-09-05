export default function ProductCardSkeleton() {
  return (
    <div className="shadow rounded flex p-2 h-[150px] animate-pulse z-0">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="h-3 bg-gray-300 rounded-full w-40 mb-4" />
          <div className="h-2 bg-gray-300 rounded-full w-48  mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full w-48  mb-2.5" />
          <div className="h-2 bg-gray-300 rounded-full w-48  mb-2.5" />
        </div>
        <div className="h-3 bg-gray-300 rounded-full w-20 mb-4" />
      </div>
      <div className="w-[110px] h-full">
        <svg
          className="w-[110px] h-full text-gray-300 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
}
