import { useClientGetAllCompanies } from "@api/client/useClientGetAllCompanies";
import { useNavigate } from "react-router-dom";

import Typography from "@components/Typography";

import Navbar from "./Navbar";
import clsx from "clsx";

import Avatar from "@components/Avatar";
import { Star } from "lucide-react";
import Container from "@components/Container";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

export default function Home() {
  const { data: _d, isLoading, isFetching } = useClientGetAllCompanies();
  const navigate = useNavigate();

  const data = [..._d, ..._d, ..._d, ..._d, ..._d, ..._d, ..._d];

  return (
    <main>
      <Navbar />
      <Navbar2 />

      <Container>
        <Typography>Lojas</Typography>

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
                  <Typography>{d.companyName}</Typography>
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
