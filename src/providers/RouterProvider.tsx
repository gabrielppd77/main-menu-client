import {
  RouterProvider as RouterProviderMain,
  createBrowserRouter,
} from "react-router-dom";

import Home from "@pages/Home";
import Company from "@pages/Company";
import SearchProduct from "@pages/SearchProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:companyPath",
    element: <Company />,
  },
  {
    path: "/:companyPath/search",
    element: <SearchProduct />,
  },
]);

export default function RouterProvider() {
  return <RouterProviderMain router={routes} />;
}
