import {
  CommentContainer,
  MainContent,
  Username,
  CommentText,
} from "./Comment.style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import avt from "../../../assets/facebook/avt.jpg";
import { Avatar, Box, Typography } from "@mui/material";

export default function Comment() {
  return (
    <CommentContainer>
      <MainContent>
        <Box className="text-container">
          <Username variant="body1">HeRo3S</Username>
          <CommentText variant="body1">arstnaoriesntoa</CommentText>
        </Box>
        <Box className="action-container">
          <FavoriteBorderIcon />
        </Box>
      </MainContent>
    </CommentContainer>
  );
}
