import { AxiosError } from "axios";

import { ProblemDetails } from "@@types/ProblemDetails";

export function extractRequestError(err: unknown) {
  if (err instanceof AxiosError) {
    const data: ProblemDetails | undefined = err?.response?.data;
    if (data) {
      return data;
    }
  } else {
    return null;
  }
}
