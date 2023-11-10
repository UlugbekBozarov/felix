import { Button, Card, Chip, styled } from "@mui/material";

export const StyledCard = styled(Card)({
  position: "relative",
  "&:hover button": {
    zIndex: 999,
    opacity: 1,
  },
});

export const StyledIconButton = styled(Button)({
  position: "absolute",
  top: "16px",
  right: "-32px",
  minWidth: "32px",
  width: "32px",
  height: "32px",
  padding: "4px",
  transition: "all 0.3s",
  opacity: 0,
  zIndex: 0,
});

export const StyledChip = styled(Chip)(({ theme }) => ({
  height: "20px",
  fontSize: "12px",
  background: "#EFE6FD",
  color: theme?.palette?.primary?.main,
}));
