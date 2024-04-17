import { Box, Grid, Tab, Tabs, styled } from "@mui/material";

export const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  margin: "1em 0",
  backgroundColor: "#242526",
  borderRadius: "10px",
  "& > *": {
    padding: "1em 1em 0 1em",
  },
});

export const TitleContainer = styled(Box)({
  display: "flex",
  "& > .MuiAvatar-root": {
    width: "50px",
    height: "50px",
  },
  "& > .MuiGrid-root": {
    flexGrow: "1",
    marginLeft: "10px",
  },
  "& > .MuiBox-root ": {
    display: "flex",
    flexDirection: "row",
    color: "#a6a9ad",
  },
});

export const TitleIconContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  "& > *": {
    marginLeft: "1.25rem",
  },
});

export const StyledImage = styled(`img`)({
  paddingLeft: "0em",
  paddingRight: "0em",
});

export const StatsContainer = styled(Grid)({
  alignItems: "center",
  "& > *": {
    alignItems: "center",
  },
});
export const EmotionStats = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  "& > img": {
    width: "1rem",
    height: "1rem",
  },
});
export const CommentsStats = styled(Grid)({
  display: "flex",
  justifyContent: "end",
});

export const ActionTabs = styled(Tabs)({
  width: "100%",
  padding: "0",
  borderColor: "#bob3b8",
  borderTop: "solid 1px",
  borderBottom: "solid 1px",
});

export const ActionTab = styled(Tab)({
  textTransform: "none",
  padding: "0",
  fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
  fontWeight: "600",
  flexGrow: "1",
});
