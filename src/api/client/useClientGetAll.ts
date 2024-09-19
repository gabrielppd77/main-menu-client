import { useQuery } from "@tanstack/react-query";

import api from "../api";
import { extractError } from "@utils/alert";

import { ClientResponseDTO } from "./dtos/ClientResponseDTO";

export const query = ["client"];

interface RequestProps {
  params: {
    urlSite: string;
  };
}

export function useClientGetAll({ params }: RequestProps) {
  async function handleRequest() {
    const response = await api.get<ClientResponseDTO>("/client", { params });
    return response.data;
  }

  const { error, ...rest } = useQuery({
    queryKey: [query, params],
    queryFn: handleRequest,
  });

  if (error) {
    extractError(error);
  }

  return rest;
}
