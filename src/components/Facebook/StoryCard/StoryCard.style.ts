import { Avatar, Box, styled } from "@mui/material";

export const StyledBackgroundImg = styled(`img`)({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "-1000",
});

export const StoryContainer = styled(Box)({
  padding: "0.5rem 0.5rem",
  flexGrow: "1",
  display: "flex",
  flexDirection: "column",
  "& > .MuiTypography-root": {
    display: "flex",
    flexGrow: 1,
    color: "#ffffff",
    textShadow: "0px 1px 0px rgba(0, 0, 0, 0.9)",
    alignItems: "flex-end",
  },
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  border: "solid 3px",
  padding: "1px",
  borderColor: theme.palette.primary.main,
}));

//for CreateStoryCard component
export const TopImage = styled(`img`)({
  flex: "7",
  objectFit: "cover",
});

export const BottomContainer = styled(Box)({
  flex: "3",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#242526",
  alignItems: "center",
  "& > .MuiTypography-root": {
    display: "flex",
    flexGrow: 1,
    color: "#ffffff",
    textShadow: "0px 1px 0px rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
  },
});
