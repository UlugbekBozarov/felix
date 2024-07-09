import { TextField, styled } from "@mui/material";

export const StyledSearchInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "isValue",
})<{ isValue?: boolean }>(({ isValue }) => ({
  minWidth: "300px",
  transition: "all 0.3s",
  background: isValue ? "#fefefe" : "transparent",
  borderRadius: "6px",
  color: "#151515",
  "& svg path": {
    stroke: isValue ? "#151515" : "#fefefe",
  },
  "& fieldset": {
    display: "none",
  },
  "& input::placeholder": {
    color: "#fefefe",
  },
  "&:hover": {
    background: "#fefefe",
    "& input::placeholder": {
      color: "#151515",
    },
    "& svg path": {
      stroke: "#151515",
    },
  },
}));
