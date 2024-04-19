import { CommentContainer, MainContent } from "./Comment.style";
import avt from "../../../assets/avt.jpg";
import { Avatar, Box, Typography } from "@mui/material";

export default function Comment() {
  return (
    <CommentContainer>
      <Avatar src={avt} />
      <MainContent>
        <Box className="text-container">
          <Typography variant="body1" sx={{ fontWeight: "500" }}>
            HeRo3S
          </Typography>
          <Typography variant="body1">arstnaoriesntoa</Typography>
        </Box>
        <Box className="action-container">
          <Typography variant="body1">11 phút</Typography>
          <Typography variant="subtitle1">Thích</Typography>
          <Typography variant="subtitle1">Phản hồi</Typography>
        </Box>
      </MainContent>
    </CommentContainer>
  );
}
