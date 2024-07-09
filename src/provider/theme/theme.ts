import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6200EE",
    },
    error: {
      main: "#FF4D4F",
    },
    warning: {
      main: "#FFEC43",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#00FF29",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#01A4FF",
    },
  },
  typography: {
    fontFamily: "Mulish, Arial, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "19px",
          borderRadius: "6px",
          "& .MuiInputBase-root": {
            height: "48px",
            boxSizing: "border-box",
          },
          "& .MuiInputBase-input": {
            height: "48px",
            padding: "0 14px",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
        input: {
          height: "48px",
          padding: "0 14px",
          boxSizing: "border-box",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "initial",
          boxShadow: "none",
        },
        sizeMedium: {
          height: "40px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#151515",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 700,
          borderRadius: "12px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media(min-width: 1200px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
      },
    },
  },
});
