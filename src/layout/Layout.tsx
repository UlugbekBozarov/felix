import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Spinner } from "components/common";

import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Box pt="72px">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Box>
    </Fragment>
  );
};

export default Layout;
