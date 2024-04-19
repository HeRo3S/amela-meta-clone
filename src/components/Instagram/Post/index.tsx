import {
  CommentsStats,
  MainContainer,
  StatsContainer,
  StyledImage,
  TitleContainer,
  TitleTextContainer,
  TitleIconContainer,
  CommentsContainer,
  ActionIconsContainer,
  ActionIconsLeftBar,
  StatusContent,
  BlueVerifiedIcon,
} from "./index.style";
import Comment from "./Comment";
import { Avatar, Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import avt from "../../../assets/facebook/avt.jpg";

interface IProps {
  title: string;
  author: string;
  content: string;
  imageURL: string[];
}
function Post() {
  return (
    <MainContainer>
      <TitleContainer>
        <Avatar src={avt} />
        <TitleTextContainer>
          <Typography variant="h6">
            HeRo3S <BlueVerifiedIcon fontSize="small" />
          </Typography>
        </TitleTextContainer>
        <TitleIconContainer>
          <MoreHorizIcon fontSize="large" />
        </TitleIconContainer>
      </TitleContainer>

      <StyledImage src="https://kenh14cdn.com/203336854389633024/2024/4/16/photo-1-17132359174921268380888.jpg" />

      <ActionIconsContainer>
        <ActionIconsLeftBar>
          <FavoriteBorderOutlinedIcon />
          <ChatBubbleOutlineIcon />
          <SendOutlinedIcon />
        </ActionIconsLeftBar>
        <Box>
          <BookmarkBorderOutlinedIcon />
        </Box>
      </ActionIconsContainer>

      <StatsContainer>
        <CommentsStats item xs>
          <Typography variant="body1">1,010,399 likes</Typography>
        </CommentsStats>
        <StatusContent>
          <Typography variant="h6">
            HeRo3S <BlueVerifiedIcon fontSize="small" />
          </Typography>
          <Typography variant="body1">Converse</Typography>
        </StatusContent>
      </StatsContainer>

      <CommentsContainer>
        <Typography variant="body1">View all 8.111 comments</Typography>
        {Array(3).fill(<Comment />)}
      </CommentsContainer>
    </MainContainer>
  );
}

export default Post;
