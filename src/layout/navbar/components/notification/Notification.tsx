import { Box, IconButton } from "@mui/material";

import { BadgeDot, Notification as NotificationIcon } from "assets/icons";
import { StyledBadge } from "./Notification.style";

const Notification = () => {
  return (
    <Box width="48px" display="flex" alignItems="center">
      <IconButton sx={{ position: "relative" }}>
        <StyledBadge badgeContent={<BadgeDot />} invisible={false}>
          <NotificationIcon />
        </StyledBadge>
      </IconButton>
    </Box>
  );
};

export default Notification;
