import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Grid, Tab, Tabs, styled } from "@mui/material";

export const MainContainer = styled(Box)({
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  // maxWidth: "600px",
  width: "60%",
  minWidth: "400px",
  margin: "1em 0",
  borderRadius: "10px",
  "& > *": {
    padding: "0 0 0.75rem 0",
  },
});

export const TitleContainer = styled(Box)({
  display: "flex",
  alignItems: "center",

  "& > .MuiAvatar-root": {
    width: "3rem",
    height: "3rem",
    border: "solid 2px transparent",
    background:
      "linear-gradient(white, white) padding-box, linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7) border-box",
  },

  "& > .MuiBox-root ": {
    display: "flex",
    flexDirection: "row",
    color: "#a6a9ad",
  },
});

export const TitleTextContainer = styled(Box)({
  alignItems: "center",
  flexGrow: "1",
  marginLeft: "10px",
  "& > *": {
    marginRight: "0.75rem",
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

export const ActionIconsContainer = styled(Box)({
  width: "100%",
  display: "flex",
});

export const ActionIconsLeftBar = styled(Box)({
  flexGrow: "1",
  "& > *": {
    marginRight: "1rem",
  },
});

export const StatsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  "& > *": {
    width: "100%",
  },
});
export const EmotionStats = styled(Box)({
  display: "flex",
  flexDirection: "row",
});
export const StatusContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& > *": {
    marginRight: "0.5rem",
  },
});
export const CommentsStats = styled(Grid)({
  display: "flex",
});

export const CommentsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const BlueVerifiedIcon = styled(VerifiedIcon)({
  color: "#0095f6",
});

