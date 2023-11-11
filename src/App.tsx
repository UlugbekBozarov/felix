import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "react-hot-toast";

import Routes from "routes/Routes";

const queryClient = new QueryClient();

function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#6200EE",
          },
        },
        shape: {
          borderRadius: 6,
        },
        components: {
          MuiFormLabel: {
            styleOverrides: {
              root: {
                display: "inherit",
                fontSize: "14px",
                lineHeight: "inherit",
                color: "#151515",
                marginBottom: "4px",
                "& .MuiFormLabel-asterisk": {
                  color: "rgb(252, 7, 7)",
                },
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                "& .MuiFormLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
                "& fieldset": {
                  borderColor: "#EBEBEB !important",
                },
                "& .Mui-error fieldset": {
                  borderColor: `#FF4D4F !important`,
                },
                "&:hover fieldset": {
                  boxShadow: "0px 4px 18px 0px rgba(51, 51, 51, 0.04)",
                },
                "& .MuiInputBase-input": {
                  height: "47px",
                  padding: "0 14px",
                },
              },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                "&:before, :after": {
                  borderColor: "#24272C",
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "initial",
                boxShadow: "none",
              },
              containedSizeLarge: {
                height: "44px",
              },
              containedSizeMedium: {
                height: "40px",
              },
              containedPrimary: {
                "&.Mui-disabled": {
                  background: "#CEB0FA",
                  color: "#fefefe",
                },
              },
              outlinedPrimary: {
                "&.Mui-disabled": {
                  borderColor: "#CEB0FA",
                  color: "#CEB0FA",
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: "none",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                background: "#fefefe",
                boxShadow: "0px 4px 32px 0px rgba(51, 51, 51, 0.04)",
                borderRadius: "12px",
                overflow: "initial",
              },
            },
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <Toaster position="bottom-right" reverseOrder={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
