import {
  ActionTab,
  ActionTabs,
  CommentsStats,
  EmotionStats,
  MainContainer,
  StatsContainer,
  StyledImage,
  TitleContainer,
  TitleIconContainer,
} from "./Post.style";
import { Avatar, Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import avt from "../../assets/avt.jpg";
import likeEmotes from "../../assets/emotes/like.png";
import heartEmotes from "../../assets/emotes/heart.png";
import hahaEmotes from "../../assets/emotes/haha.png";
import luvEmotes from "../../assets/emotes/luv.png";
import angryEmotes from "../../assets/emotes/angry.png";
import sadgeEmotes from "../../assets/emotes/sadge.png";

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
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Groupname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Author name</Typography>
          </Grid>
        </Grid>
        <TitleIconContainer>
          <MoreHorizIcon fontSize="large" />
          <CloseIcon fontSize="large" />
        </TitleIconContainer>
      </TitleContainer>

      <Box>
        <Typography variant="body1">
          19/05 - Chung kết Đấu trường Danh Vọng tổ chức ở Thủ Đô Hà Nội
        </Typography>
      </Box>

      <StyledImage src="https://kenh14cdn.com/203336854389633024/2024/4/16/photo-1-17132359174921268380888.jpg" />

      <StatsContainer container>
        <EmotionStats item xs>
          <img src={likeEmotes} />
          <img src={heartEmotes} />
          <Typography variant="subtitle2">115</Typography>
        </EmotionStats>
        <CommentsStats item xs>
          <Typography variant="subtitle2">28 bình luận</Typography>
        </CommentsStats>
      </StatsContainer>

      <ActionTabs>
        <ActionTab
          icon={<ThumbUpOutlinedIcon />}
          iconPosition="start"
          label="Thích"
        ></ActionTab>
        <ActionTab
          icon={<ChatBubbleOutlineIcon />}
          iconPosition="start"
          label="Bình luận"
        ></ActionTab>
        <ActionTab
          icon={<SendOutlinedIcon />}
          iconPosition="start"
          label="Gửi"
        ></ActionTab>
      </ActionTabs>
    </MainContainer>
  );
}

export default Post;
