import { Badge, styled, keyframes } from "@mui/material";

const wiggle = keyframes`
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
`;

export const StyledBadge = styled(Badge)(({ invisible }) => ({
  "& .MuiBadge-badge": {
    width: "7px",
    minWidth: "7px",
    height: "6px",
    padding: 0,
    top: "3px",
    right: "6px",
  },
  "& svg.bell": {
    animation: !invisible ? `${wiggle} 2s linear infinite` : "none",
    transformOrigin: "top center",
  },
}));
