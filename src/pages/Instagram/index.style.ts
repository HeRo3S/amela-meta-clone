import { Box, Grid, styled } from "@mui/material";

export const PageContainer = styled(Grid)({
  width: "100vw",
  minHeight: "100vh",
});

export const AppBarContainer = styled(Box)({
  width: "100%",
  minHeight: "69px",
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
