import { useQuery } from "@tanstack/react-query";

import api from "../api";
import { extractError } from "@utils/alert";

import { ClientResponseDTO } from "./dtos/ClientResponseDTO";

const query = ["client-get-all-companies"];

export function useClientGetAllCompanies() {
  async function handleRequest() {
    const response = await api.get<ClientResponseDTO[]>(
      "/client/get-all-companies"
    );
    return response.data;
  }

  const { error, ...rest } = useQuery({
    queryKey: query,
    queryFn: handleRequest,
    initialData: [],
  });

  if (error) {
    extractError(error);
  }

  return rest;
}
