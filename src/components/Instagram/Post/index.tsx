import {
  CommentsStats,
  EmotionStats,
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
import Comment from "../Comment";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import avt from "../../../assets/facebook/avt.jpg";
import likeEmotes from "../../../assets/facebook/emotes/like.png";
import heartEmotes from "../../../assets/facebook/emotes/heart.png";
import hahaEmotes from "../../../assets/facebook/emotes/haha.png";
import luvEmotes from "../../../assets/facebook/emotes/luv.png";
import angryEmotes from "../../../assets/facebook/emotes/angry.png";
import sadgeEmotes from "../../../assets/facebook/emotes/sadge.png";

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

      <Box>
        <Typography variant="body1">
          19/05 - Chung kết Đấu trường Danh Vọng tổ chức ở Thủ Đô Hà Nội
        </Typography>
      </Box>

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
        <StatusContent>
          <Typography variant="h6">
            HeRo3S <BlueVerifiedIcon fontSize="small" />
          </Typography>
          <Typography variant="body1">Converse</Typography>
        </StatusContent>
        <CommentsStats item xs>
          <Typography variant="body1">1,010,399 likes</Typography>
        </CommentsStats>
      </StatsContainer>

      <CommentsContainer>
        <Typography variant="body1">View all 8.111 comments</Typography>
        {Array(3).fill(<Comment />)}
      </CommentsContainer>
    </MainContainer>
  );
}

export default Post;
