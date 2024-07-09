import { Box, Button, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  "& button": {
    opacity: 0,
    zIndex: 0,
  },
  "&:hover button": {
    opacity: 1,
    zIndex: 999,
  },
});

export const StyledIconButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "0",
  minWidth: "32px",
  width: "32px",
  height: "32px",
  padding: "4px",
  boxShadow: "0 6px 32px 0 #1515157A",
  transition: "all 0.3s",
  [theme.breakpoints.up("lg")]: {
    right: "-32px",
  },
}));
