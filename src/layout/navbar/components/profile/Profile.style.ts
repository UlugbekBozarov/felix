import { styled } from "@mui/material";

export const StyledImageBlock = styled("div")({
  width: "32px",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "60px",
  background:
    "conic-gradient(from 180deg at 50% 50%, #FD648E 0deg, #884CB2 178.1249964237213deg, #FD648E 360deg)",
  backdropFilter: "blur(15px)",
});

export const Image = styled("div")({
  width: "26px",
  height: "26px",
  borderRadius: "15px",
  backgroundImage: "url(/images/profile.png)",
  backgroundSize: "44px",
  backgroundPosition: "-9px -12px",
});
