import { Box, IconButton } from "@mui/material";
import { StyledImageBlock } from "./Profile.style";

const Profile = () => {
  return (
    <Box width="48px" ml="7px">
      <IconButton sx={{ position: "relative" }}>
        <StyledImageBlock />
      </IconButton>
    </Box>
  );
};

export default Profile;
