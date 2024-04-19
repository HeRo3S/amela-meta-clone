import { Button, Typography } from "@mui/material";
import {
  BottomContainer,
  StoryContainer,
  StyledAvatar,
  StyledBackgroundImg,
  TopImage,
} from "./StoryCard.style";
import "swiper/css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import imgStories from "../../../assets/facebook/img_stories.jpg";
import avt from "../../../assets/facebook/avt.jpg";

export default function StoryCard() {
  return (
    <>
      <StyledBackgroundImg src={imgStories} />
      <StoryContainer>
        <StyledAvatar src={avt}></StyledAvatar>
        <Typography variant="h6">HeRo3S</Typography>
      </StoryContainer>
    </>
  );
}

export function CreateStoryCard() {
  return (
    <>
      <TopImage src={avt} style={{ flex: 7 }} />
      <BottomContainer sx={{ flex: 3 }}>
        <Button>
          <AddCircleIcon fontSize="large" />
        </Button>
        <Typography variant="h6">Tạo tin</Typography>
      </BottomContainer>
    </>
  );
}
