import Swal, { SweetAlertIcon } from "sweetalert2";

import { HttpStatusCode } from "axios";

import { extractRequestError } from "./utils";

export function fireAlertError(err: unknown) {
  let title = "Oops...";
  let text = "Algo deu errado!";
  let icon: SweetAlertIcon = "error";

  const result = extractRequestError(err);

  if (result) {
    title = result.status + " " + result.title;
    text = result.detail;
    icon = result.status === HttpStatusCode.BadRequest ? "warning" : "error";
  }

  Swal.fire({
    icon,
    title,
    text,
    confirmButtonText: "Beleza!",
    showCloseButton: true,
  });
}
