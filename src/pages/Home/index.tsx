import { useClientGetAllCompanies } from "@api/client/useClientGetAllCompanies";
import { useNavigate } from "react-router-dom";

import Typography from "@components/Typography";

import Navbar from "./Navbar";

export default function Home() {
  const { data, isLoading, isFetching } = useClientGetAllCompanies();
  const navigate = useNavigate();

  return (
    <main>
      <Navbar />

      <Typography>Lojas</Typography>

      {data.map((d) => (
        <div key={d.companyId} onClick={() => navigate(d.companyPath)}>
          <Typography>{d.companyName}</Typography>
        </div>
      ))}
    </main>
  );
}
