import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { StyledList, StyledListItemIcon } from "./TopList.style";
import { listItems } from "./TopList.data";
import avt from "../../../assets/facebook/avt.jpg";

export default function TopList() {
  return (
    <StyledList>
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
