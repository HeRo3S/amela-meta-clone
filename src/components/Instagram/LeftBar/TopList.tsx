import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { StyledList, StyledListItemIcon, StyledLogoImg } from "./TopList.style";
import { listItems } from "./TopList.data";
import avt from "../../../assets/instagram/avt.jpg";
import logo from "../../../assets/instagram/logo.png";

export default function TopList() {
  return (
    <StyledList>
      <ListItem>
        <StyledLogoImg src={logo} />
      </ListItem>
      {listItems.map((i) => (
        <ListItem>
          <StyledListItemIcon>
            <i.icon fontSize="large" />
          </StyledListItemIcon>
          <ListItemText>
            <Typography variant="h6">{i.text}</Typography>
          </ListItemText>
        </ListItem>
      ))}
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avt} />
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h6">Profile</Typography>
        </ListItemText>
      </ListItem>
    </StyledList>
  );
}
