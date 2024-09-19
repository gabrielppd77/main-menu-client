import { ClientCategoryResponseDTO } from "./ClientCategoryResponseDTO";

export interface ClientResponseDTO {
  companyName: string;
  companyDescription?: string;
  companyUrlImage?: string;
  categories: ClientCategoryResponseDTO[];
}
