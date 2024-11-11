import { useClientGetAllCompanies } from "@api/client/useClientGetAllCompanies";
import { useNavigate } from "react-router-dom";

import Container from "@components/Container";
import LinearProgress from "@components/LinearProgress";

import Navbar from "./components/Navbar";
import CompanyCard, { CompanyCardSkeleton } from "./components/CompanyCard";
import Footer from "./components/Footer";

export default function Home() {
  const { data: _d, isLoading, isFetching } = useClientGetAllCompanies();
  const navigate = useNavigate();

  const data = _d || [];

  return (
    <main>
      <Navbar />
      <div className="h-nav-height" />

      <Container className="flex h-screen flex-col justify-between">
        <div>
          <h2 className="text-gray-700 font-medium text-lg mb-2">Lojas</h2>

          <LinearProgress active={isFetching} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-2">
            {isLoading
              ? Array.from({ length: 15 }).map((_, index) => (
                  <CompanyCardSkeleton key={index} />
                ))
              : data.map((d) => (
                  <CompanyCard
                    key={d.companyId}
                    name={d.companyName}
                    image={d.companyUrlImage}
                    onClick={() => navigate(d.companyPath)}
                  />
                ))}
          </div>
        </div>

        <Footer />
      </Container>
    </main>
  );
}
