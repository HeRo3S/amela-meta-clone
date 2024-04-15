import { AppBar, Grid, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#242526",
  maxHeight: "70px",
  display: "flex",
});

export const StyledAppBarGridContainer = styled(Grid)({
  width: "100%",
  display: "flex",
  padding: "5px 5px",
});

export const StyledAppbarGridMainItemsContainer = styled(Grid)({
  alignSelf: "center",
  display: "flex",
});

export const StyledAppbarGridSubItemsContainer = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledLogo = styled(`img`)({
  width: "50px",
  height: "50px",
});

export const Search = styled(`div`)({
  maxWidth: "200px",
});
export const SearchIconWrapper = styled(`div`)({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
