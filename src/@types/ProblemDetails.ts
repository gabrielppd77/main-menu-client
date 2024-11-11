import { HttpStatusCode } from "axios";

export interface ProblemDetails {
  type: string;
  status: HttpStatusCode;
  title: string;
  detail: string;
  instance: string;
}
