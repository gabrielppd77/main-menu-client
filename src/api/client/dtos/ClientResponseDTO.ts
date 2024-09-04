import { ClientCategoryResponseDTO } from "./ClientCategoryResponseDTO";
import { ClientProductResponseDTO } from "./ClientProductResponseDTO";

export interface ClientResponseDTO extends ClientCategoryResponseDTO {
  products: ClientProductResponseDTO[];
}
