import { useContext } from "react";

import mainContext from "@contexts/mainContext";

export default function useMainContext() {
  return useContext(mainContext);
}
