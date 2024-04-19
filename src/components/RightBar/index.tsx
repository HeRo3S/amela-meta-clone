import {
  Avatar,
  Badge,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import avt from "../../assets/avt.jpg";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {
  RightBarContainer,
  StyledAvatar,
  StyledButton,
  StyledDeleteButton,
  StyledListItemIcon,
  StyledListSubheader,
} from "./RightBar.style";

function RightBar() {
  return (
    <RightBarContainer>
      <List
        subheader={
          <StyledListSubheader>
            <Typography>Lời mời kết bạn</Typography>
            <Typography>Xem tất cả</Typography>
          </StyledListSubheader>
        }
      >
        <ListItem>
          <ListItemAvatar>
            <StyledAvatar src={avt} />
          </ListItemAvatar>
          <ListItemText>
            <Grid container spacing={1}>
              <Grid item xs={9}>
                <Typography variant="h6">HeRo3S</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">1 ngày</Typography>
              </Grid>
              <Grid item xs={6}>
                <StyledButton variant="contained">Xác nhận</StyledButton>
              </Grid>
              <Grid item xs={6}>
                <StyledDeleteButton variant="contained">Xoá</StyledDeleteButton>
              </Grid>
            </Grid>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
      <List
        subheader={<StyledListSubheader>Người liên hệ</StyledListSubheader>}
      >
        <ListItem>
          <ListItemAvatar>
            <Badge
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              color="success"
              overlap="circular"
              variant="dot"
            >
              <Avatar src={avt} />
            </Badge>
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">HeRo3S</Typography>
          </ListItemText>
        </ListItem>
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
            <Avatar src={avt} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">HeRo3S</Typography>
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
    </RightBarContainer>
  );
}

export default RightBar;
