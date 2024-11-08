import { useClientGetAllCompanies } from "@api/client/useClientGetAllCompanies";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Avatar from "@components/Avatar";
import { Star } from "lucide-react";
import Container from "@components/Container";
import Footer from "./Footer";

export default function Home() {
  const { data: _d } = useClientGetAllCompanies();
  const navigate = useNavigate();

  const data = [..._d, ..._d, ..._d, ..._d, ..._d, ..._d, ..._d];

  return (
    <main className="flex h-screen flex-col justify-between">
      {/* <Navbar />
      <Navbar2 /> */}

      <Container>
        <h2 className="text-gray-700 font-medium text-lg line-clamp-2 mb-2">
          Lojas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((d) => (
            <div
              key={d.companyId}
              onClick={() => navigate(d.companyPath)}
              className={clsx(
                "h-28 p-4 rounded-md flex gap-2",
                "hover:shadow-md hover:scale-105 hover:cursor-pointer transition ease-in-out duration-200"
              )}
            >
              <Avatar image={d.companyUrlImage} size="small" />
              <div className="flex items-center">
                <div>
                  <div className="text-gray-700 font-medium text-md line-clamp-2 mb-2">
                    {d.companyName}
                  </div>
                  <div className="flex gap-2">
                    <Star className="text-yellow-300 size-5" />
                    <div>5.0</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </main>
  );
}
