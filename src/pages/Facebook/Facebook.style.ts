import { Box, Grid, styled } from "@mui/material";

export const PageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "#18191a",
});

export const AppBarContainer = styled(Box)({
  width: "100%",
  minHeight: "69px",
});

export const MainContainer = styled(Grid)({
  flexGrow: "1",
  height: "100%",
});

export const MainLeftBar = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MainRightBar = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
