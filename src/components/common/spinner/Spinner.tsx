import { FC, memo } from "react";
import { Box, CircularProgress } from "@mui/material";

interface SpinnerProps {
  width?: string;
  height?: string;
  size?: string | number | undefined;
  color?:
    | "error"
    | "inherit"
    | "success"
    | "primary"
    | "secondary"
    | "info"
    | "warning"
    | undefined;
}

const Spinner: FC<SpinnerProps> = ({
  width = "100%",
  height = "100%",
  size,
  color,
}) => {
  return (
    <Box
      width={width}
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default memo(Spinner);
