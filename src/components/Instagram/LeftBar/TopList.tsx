import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  StyledLogoImg,
} from "./TopList.style";
import { listItems } from "./TopList.data";
import avt from "../../../assets/instagram/avt.jpg";
import logo from "../../../assets/instagram/logo.png";
import { useState } from "react";

export default function TopList() {
  const [selectingID, setSelectingID] = useState(0);
  return (
    <StyledList>
      <ListItem>
        <StyledLogoImg src={logo} />
      </ListItem>
      {listItems.map((e, i) => (
        <StyledListItem>
          <StyledListItemIcon>
            <e.icon fontSize="large" />
          </StyledListItemIcon>
          <ListItemText>
            <Typography variant={selectingID === i ? "h6" : "body1"}>
              {e.text}
            </Typography>
          </ListItemText>
        </StyledListItem>
      ))}
      <StyledListItem>
        <ListItemAvatar>
          <Avatar src={avt} />
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="body1">Profile</Typography>
        </ListItemText>
      </StyledListItem>
    </StyledList>
  );
}
