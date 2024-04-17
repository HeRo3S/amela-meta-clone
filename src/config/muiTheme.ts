import { createTheme } from "@mui/material";

const theme = createTheme({
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
    subtitle1: {
      fontWeight: "600",
      color: "#b0b3b8",
    },
    subtitle2: {
      color: "#b0b3b8",
      fontSize: "1rem",
      lineHeight: "1.75",
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         width: "164px",
  //         height: "61px",
  //         borderRadius: "0px",
  //         fontFamily: "Inter",
  //         backgroundColor: "#c9cbcb",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
});
export default theme;
