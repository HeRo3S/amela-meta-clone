import { createTheme } from "@mui/material";

export const FbTheme = createTheme({
  palette: {
    primary: {
      main: "#0866ff",
    },
    mode: "dark",
    text: {
      primary: "rgba(255,255,255,1)",
      secondary: "#b0b3b8",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    body1: {},
    body2: {
      color: "#737373",
      fontWeight: "500",
    },
    subtitle1: {
      fontWeight: "600",
      color: "#a3a3a3",
    },
    subtitle2: {
      color: "#b0b3b8",
      fontSize: "1rem",
      lineHeight: "1.75",
    },
  },
});

export const InstaTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111111",
    },
    text: {
      // primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      color: "#111",
    },
    body1: {
      color: "#111111",
    },
    subtitle1: {
      fontWeight: "600",
      color: "#111111",
    },
    subtitle2: {
      color: "#a3a3a3",
      // lineHeight: "1.75",
      // fontSize: "1rem",
    },
  },
});
