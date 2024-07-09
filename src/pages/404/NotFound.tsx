import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

import { NotFound as NotFoundIcon } from "assets/icons";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <Box
      width="100%"
      minHeight="calc(100vh - 72px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <NotFoundIcon />
        <Stack
          width="492px"
          direction="row"
          spacing="12px"
          mt="72px"
          mr="auto"
          ml="auto"
        >
          <Button fullWidth variant="contained" onClick={goHome}>
            Go Home Page
          </Button>
          <Button fullWidth variant="outlined" onClick={reload}>
            Reload page
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default NotFound;
