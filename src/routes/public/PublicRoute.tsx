import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { Spinner } from "components/common";
import { ErrorBoundary } from "services/error";

import { SignIn, SignUp } from "pages/auth";
import NotFound from "pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const PublicRouts = () => {
  redirect("/");

  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PublicRouts;
