import { FC, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "./theme";

interface ThemeProviderProps {
  children?: ReactNode | undefined;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
