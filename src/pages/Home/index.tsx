import { useClientGetAllCompanies } from "@api/client/useClientGetAllCompanies";
import { useNavigate } from "react-router-dom";

import Typography from "@components/Typography";

import Navbar from "./Navbar";
import clsx from "clsx";

import Avatar from "@components/Avatar";

export default function Home() {
  const { data: _d, isLoading, isFetching } = useClientGetAllCompanies();
  const navigate = useNavigate();

  const data = [..._d, ..._d, ..._d, ..._d, ..._d, ..._d, ..._d];

  return (
    <main>
      <Navbar />

      <Typography>Lojas</Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((d) => (
          <div
            key={d.companyId}
            onClick={() => navigate(d.companyPath)}
            className={clsx("h-28 p-5 rounded-md flex")}
          >
            <Avatar image={d.companyUrlImage} />
            <Typography>{d.companyName}</Typography>
          </div>
        ))}
      </div>
    </main>
  );
}
