import { ClientCategoryResponseDTO } from "./ClientCategoryResponseDTO";

export interface ClientResponseDTO {
  companyName: string;
  categories: ClientCategoryResponseDTO[];
}
