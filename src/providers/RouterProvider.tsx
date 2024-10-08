import {
  RouterProvider as RouterProviderMain,
  createBrowserRouter,
} from "react-router-dom";

import Home from "@pages/Home";
import Company from "@pages/Company";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:companyPath",
    element: <Company />,
  },
]);

export default function RouterProvider() {
  return <RouterProviderMain router={routes} />;
}
