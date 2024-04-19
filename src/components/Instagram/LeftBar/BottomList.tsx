import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { listItems } from "./BottomList.data";

export default function BottomList() {
  return (
    <List>
      {listItems.map((e) => (
        <ListItem>
          <ListItemIcon>{<e.icon />}</ListItemIcon>
          <ListItemText>
            <Typography variant="h6">{e.text}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
