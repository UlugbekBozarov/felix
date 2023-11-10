import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "components/common";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
