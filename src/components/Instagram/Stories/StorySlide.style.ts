import { Avatar, Box, styled } from "@mui/material";

export const StoryContainer = styled(Box)({
  width: "100%",
  height: "100%",
  padding: "0.5rem 0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > .MuiTypography-root": {
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-end",
  },
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "4rem",
  height: "4rem",
  border: "solid 2px transparent",
  background:
    "linear-gradient(white, white) padding-box, linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7) border-box",
}));
