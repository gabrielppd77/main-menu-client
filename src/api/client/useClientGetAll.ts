import { useQuery } from "@tanstack/react-query";

import api from "../api";
import { extractError } from "@utils/alert";

import { ClientResponseDTO } from "./dtos/ClientResponseDTO";

export const query = ["client"];

export function useClientGetAll() {
  async function handleRequest() {
    const response = await api.get<ClientResponseDTO>("/client");
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
