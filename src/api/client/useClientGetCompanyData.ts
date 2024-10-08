import { useQuery } from "@tanstack/react-query";

import api from "../api";
import { extractError } from "@utils/alert";

import { ClientResponseDTO } from "./dtos/ClientResponseDTO";

const query = ["client"];

interface RequestProps {
  params: { companyPath: string };
}

export function useClientGetCompanyData({ params }: RequestProps) {
  async function handleRequest() {
    const response = await api.get<ClientResponseDTO>(
      "/client/get-company-data",
      {
        params,
      }
    );
    return response.data;
  }

  const { error, ...rest } = useQuery({
    queryKey: query,
    queryFn: handleRequest,
  });

  if (error) {
    extractError(error);
  }

  return rest;
}

export function useClientGetCompanyDataQuery() {
  return useQuery<ClientResponseDTO>({ queryKey: query });
}
