import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import Routes from "routes/Routes";

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
    <ThemeProvider
      theme={
        theme
        //   createTheme({
        //   palette: {
        //     // mode,
        //     // background: {
        //     //   default: mode === "light" ? "#f5f5f5" : "#101418",
        //     // },
        //   },
        //   shape: { borderRadius: 12 },
        //   components: {
        //     MuiAutocomplete: {
        //       styleOverrides: {
        //         root: {
        //           height: "43px",
        //         },
        //         inputRoot: {
        //           height: "43px",
        //           paddingTop: 0,
        //           paddingBottom: 0,
        //         },
        //         input: {
        //           height: "43px",
        //           minHeight: "43px",
        //           boxSizing: "border-box",
        //         },
        //       },
        //     },
        //     MuiFormLabel: {
        //       styleOverrides: {
        //         root: {
        //           display: "inherit",
        //           fontSize: "14px",
        //           lineHeight: "inherit",
        //           color: "#313649",
        //           marginBottom: "0.5rem",
        //           "& .MuiFormLabel-asterisk": {
        //             color: "rgb(252, 7, 7)",
        //           },
        //         },
        //       },
        //     },
        //     MuiAppBar: {
        //       styleOverrides: {
        //         root: {
        //           height: "76px",
        //           padding: "16px 10px 4px",
        //           backgroundImage: "none",
        //           backgroundColor: "transparent",
        //           boxShadow: "none",
        //           "& .MuiToolbar-root": {
        //             height: "56px",
        //             minHeight: "56px",
        //             background: mode === "light" ? "#fff" : "#121212",
        //             border: "1px solid",

        //             borderColor:
        //               mode === "light" ? "#E5EAF2" : "rgba(255, 255, 255, 0.12)",
        //             borderRadius: "12px",
        //           },
        //           "@media(min-width: 900px)": {
        //             padding: "16px 20px 4px",
        //           },
        //         },
        //       },
        //     },
        //     MuiCard: {
        //       styleOverrides: {
        //         root: {
        //           boxShadow: "none",
        //         },
        //       },
        //     },
        //     MuiTableCell: {
        //       styleOverrides: {
        //         root: {
        //           "&.MuiTableCell-head": {
        //             fontWeight: 600,
        //           },
        //         },
        //       },
        //     },
        //     MuiTextField: {
        //       styleOverrides: {
        //         root: {
        //           "& .MuiFormLabel-root": {
        //             transform: "translate(14px, 14px) scale(1)",
        //             "&.MuiInputLabel-shrink": {
        //               transform: "translate(14px, -9px) scale(0.75)",
        //             },
        //           },
        //           "& .MuiInputBase-input": {
        //             height: "43px",
        //             padding: "0 14px",
        //           },
        //         },
        //       },
        //     },
        //   },
        // })
      }
    >
      <Routes />
    </ThemeProvider>
  );
}

export default App;
