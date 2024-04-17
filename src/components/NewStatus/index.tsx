import { Avatar, Grid, Tab, Tabs, Typography } from "@mui/material";
import {
  MainContainer,
  StyledGridItemFlex,
  StyledTab,
  StyledTabs,
  StyledTextField,
} from "./NewStatus.style";
import avt from "../../assets/avt.jpg";
import iconLive from "../../assets/icons/livestream.png";
import iconAlbum from "../../assets/icons/album.png";
import iconEmotes from "../../assets/icons/emotes.png";

export default function NewStatus() {
  return (
    <MainContainer container columns={12}>
      <StyledGridItemFlex item xs={12}>
        <Avatar src={avt}></Avatar>
        <StyledTextField placeholder="HeRo3S ơi, bạn làm gì thế?"></StyledTextField>
      </StyledGridItemFlex>
      <Grid item xs={12}>
        <StyledTabs>
          <StyledTab
            icon={<Avatar src={iconLive} />}
            iconPosition="start"
            label="Video trực tiếp"
          ></StyledTab>
          <StyledTab
            icon={<Avatar src={iconAlbum} />}
            iconPosition="start"
            label="Ảnh/video"
          ></StyledTab>
          <StyledTab
            icon={<Avatar src={iconEmotes} />}
            iconPosition="start"
            label="Cảm xúc/hoạt động"
          ></StyledTab>
        </StyledTabs>
      </Grid>
    </MainContainer>
  );
}
