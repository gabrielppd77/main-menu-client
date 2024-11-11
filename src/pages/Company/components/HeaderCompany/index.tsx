import Avatar from "@components/Avatar";

export function HeaderCompanySkeleton() {
  return (
    <div className="h-48 w-full flex justify-center items-center px-2 animate-pulse">
      <div className="flex items-center gap-2">
        <Avatar size="large" />
        <div>
          <h1 className="font-semibold text-lg text-gray-700">
            <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2" />
          </h1>
          <h3 className="text-gray-700 font-normal line-clamp-2 mb-2">
            <div className="h-2.5 bg-gray-300 rounded-full w-32 animate-pulse" />
          </h3>
        </div>
      </div>
    </div>
  );
}

interface HeaderCompanyProps {
  companyImage?: string;
  companyName: string;
  companyDescription?: string;
}

export default function HeaderCompany({
  companyImage,
  companyName,
  companyDescription,
}: HeaderCompanyProps) {
  return (
    <div className="h-48 w-full flex justify-center items-center px-2">
      <div className="flex items-center gap-2">
        <Avatar size="large" alt="icone da loja" image={companyImage} />
        <div>
          <h1 className="font-semibold text-lg text-gray-700">{companyName}</h1>
          <h3 className="text-gray-700 font-normal line-clamp-2 mb-2">
            {companyDescription}
          </h3>
        </div>
      </div>
    </div>
  );
}
