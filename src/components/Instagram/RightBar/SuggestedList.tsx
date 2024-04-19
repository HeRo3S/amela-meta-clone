import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Badge,
  Typography,
  Button,
} from "@mui/material";
import {
  StyledListItemText,
  StyledListSubheader,
  StyledButton,
} from "./SuggestedList.style";
import avt from "../../../assets/facebook/avt.jpg";
import { StyledAvatar } from "./index.style";
export default function SuggestedList() {
  return (
    <List
      subheader={
        <StyledListSubheader>
          <Typography>Suggested for you</Typography>
          <Typography>See All</Typography>
        </StyledListSubheader>
      }
    >
      <ListItem>
        <ListItemAvatar>
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            color="success"
            overlap="circular"
            variant="dot"
          >
            <StyledAvatar src={avt} />
          </Badge>
        </ListItemAvatar>
        <StyledListItemText
          primary=<Typography variant="h6">hero3s_vn</Typography>
          secondary=<Typography variant="body2">Follows you</Typography>
        ></StyledListItemText>
        <StyledButton>Follow</StyledButton>
      </ListItem>
      {Array(6).fill(
        <ListItem>
          <ListItemAvatar>
            <StyledAvatar src={avt} />
          </ListItemAvatar>
          <StyledListItemText
            primary=<Typography variant="h6">hero3s_vn</Typography>
            secondary=<Typography variant="body2">Suggested for you</Typography>
          ></StyledListItemText>
          <StyledButton>Follow</StyledButton>
        </ListItem>,
      )}
    </List>
  );
}
