import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { CloudCheck } from "assets/icons";

import { Breadcrumbs, Notification, Profile, Search } from "./components";

const Navbar = () => {
  return (
    <Box height="72px" py="12px" boxSizing="border-box">
      <AppBar component="nav" color="transparent">
        <Toolbar sx={{ px: "100px !important" }}>
          <IconButton>
            <CloudCheck />
          </IconButton>
          <Breadcrumbs />
          <Search />
          <Box width="100%" display="flex" justifyContent="flex-end">
            <Notification />
            <Profile />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
