import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Spinner } from "components/common";
import { ErrorBoundary } from "services/error";

import Layout from "layout/Layout";
import NotFound from "pages/404/NotFound";

import { BooksAddOrEditModal, BooksList } from "pages/books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <BooksList />,
        children: [
          {
            path: "add",
            element: <BooksAddOrEditModal />,
          },
          {
            path: "edit/:bookId",
            element: <BooksAddOrEditModal />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

const PrivateRouts = () => {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PrivateRouts;
