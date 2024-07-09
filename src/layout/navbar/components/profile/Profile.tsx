import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Image, StyledImageBlock } from "./Profile.style";
import { MouseEvent, useState } from "react";
import { clearCookie } from "services/storage";
import { Logout } from "assets/icons";

const Profile = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    clearCookie();
    window.location.href = "/";
  };

  return (
    <Box width="48px" ml="7px">
      <IconButton onClick={handleOpen} sx={{ position: "relative" }}>
        <StyledImageBlock>
          <Image />
        </StyledImageBlock>
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Box display="flex" alignItems="center">
            <Box
              width="24px"
              height="24px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mr="7px"
            >
              <Logout />
            </Box>
            <Typography textAlign="center">Logout</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
