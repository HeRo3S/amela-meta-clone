import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import avt from "../../assets/avt.jpg";
import AvtFriends from "../../assets/icons/friends.png";
import AvtBookmark from "../../assets/icons/bookmark.png";
import AvtMemories from "../../assets/icons/memories.png";
import AvtGroups from "../../assets/icons/groups.png";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { StyledListItemIcon, StyledListSubheader } from "./LeftBar.style";

function LeftBar() {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={avt} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">HeRo3S</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtFriends} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">Bạn bè</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtBookmark} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">Đã lưu</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtMemories} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">Kỷ niệm</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtGroups} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">Nhóm</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemIcon>
            <ExpandCircleDownIcon fontSize="large" />
          </StyledListItemIcon>
          <ListItemText>
            <Typography variant="h6">Xem thêm</Typography>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
      <List
        subheader={<StyledListSubheader>Lối tắt của bạn</StyledListSubheader>}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtFriends} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">Game Không Hay, Xoá Group</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtFriends} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">AOV NEWS</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={AvtFriends} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">Mangaholic 2.0</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <StyledListItemIcon>
            <ExpandCircleDownIcon fontSize="large" />
          </StyledListItemIcon>
          <ListItemText>
            <Typography variant="h6">Xem thêm</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

export default LeftBar;
