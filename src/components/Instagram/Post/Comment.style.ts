import { Box, Typography, styled } from "@mui/material";

export const CommentContainer = styled(Box)({
  display: "flex",
  margin: "10px 0",
});

export const MainContent = styled(Box)({
  display: "flex",
  width: "100%",
  "& > .text-container": {
    flexGrow: "1",
    display: "flex",
    backgroundColor: "#fff",
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

export const Username = styled(Typography)({
  fontWeight: "600",
  marginRight: "0.75rem",
});
export const CommentText = styled(Typography)({
  fontWeight: "500",
});
