import { ClientProductResponseDTO } from "./ClientProductResponseDTO";

export interface ClientCategoryResponseDTO {
  id: string;
  name: string;
  order: number;
  products: ClientProductResponseDTO[];
}
