import { AppBar, Box, Container, IconButton, Stack } from "@mui/material";

import { CloudCheck } from "assets/icons";

import { Breadcrumbs, Notification, Profile, Search } from "./components";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent">
      <Container sx={{ px: "20px" }}>
        <Stack height="72px" direction="row" alignItems="center">
          <Stack direction="row" alignItems="center">
            <IconButton>
              <CloudCheck />
            </IconButton>
            <Breadcrumbs />
            <Search />
          </Stack>
          <Box
            width="100%"
            height="72px"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Notification />
            <Profile />
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
