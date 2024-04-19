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
import avt from "../../../assets/facebook/avt.jpg";
import {
  RightBarContainer,
  StyledAvatar,
  StyledButton,
  StyledDeleteButton,
  StyledListSubheader,
} from "./index.style";
import SuggestedList from "./SuggestedList";

function RightBar() {
  return (
    <RightBarContainer>
      <List>
        <ListItem>
          <ListItemAvatar>
            <StyledAvatar src={avt} />
          </ListItemAvatar>
          <ListItemText>
            <Grid container spacing={1}>
              <Grid item xs>
                <Typography variant="h6">hero3s_vn</Typography>
                <Typography variant="body1">HeRo3S</Typography>
              </Grid>
              <Grid item xs={4}>
                <StyledButton>Switch</StyledButton>
              </Grid>
            </Grid>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
      <SuggestedList />
    </RightBarContainer>
  );
}

export default RightBar;
