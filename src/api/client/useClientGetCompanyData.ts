import { useQuery } from "@tanstack/react-query";

import api from "../api";

import { ClientResponseDTO } from "./dtos/ClientResponseDTO";

const query = ["client"];

interface RequestProps {
  enabled?: boolean;
  params: { companyPath: string; query?: string };
}

export function useClientGetCompanyData({
  enabled = true,
  params,
}: RequestProps) {
  async function handleRequest() {
    const response = await api.get<ClientResponseDTO>(
      "/client/get-company-data",
      {
        params,
      }
    );
    return response.data;
  }

  return useQuery({
    queryKey: query,
    queryFn: handleRequest,
    retry: false,
    enabled,
  });
}
