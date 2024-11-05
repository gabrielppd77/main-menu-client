import { ClientCategoryResponseDTO } from "./ClientCategoryResponseDTO";

export interface ClientResponseDTO {
  companyId: string;
  companyName: string;
  companyPath: string;
  companyDescription?: string;
  companyUrlImage?: string;
  categories: ClientCategoryResponseDTO[];
}
