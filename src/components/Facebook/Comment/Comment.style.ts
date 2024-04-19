import { Box, styled } from "@mui/material";

export const CommentContainer = styled(Box)({
  display: "flex",
  margin: "10px 0",
});

export const MainContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "20px",
  "& > .text-container": {
    padding: "5px 15px",
    backgroundColor: "#3a3b3c",
    borderRadius: "20px",
  },
  "& > .action-container": {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: "15px",
    },
  },
});
