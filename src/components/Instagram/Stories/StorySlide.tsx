import { Button, Typography } from "@mui/material";
import {
  BottomContainer,
  StoryContainer,
  StyledAvatar,
} from "./StorySlide.style";
import avt from "../../../assets/instagram/avt.jpg";

export default function StorySlide() {
  return (
    <StoryContainer>
      <StyledAvatar src={avt}></StyledAvatar>
      <Typography variant="body1">HeRo3S</Typography>
    </StoryContainer>
  );
}
