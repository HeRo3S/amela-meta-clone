import { Grid } from "@mui/material";
import {
  AppBarContainer,
  MainContainer,
  MainLeftBar,
  MainRightBar,
  PageContainer,
} from "./Facebook.style";
import AppBar from "../../components/Facebook/AppBar";
import LeftBar from "../../components/Facebook/LeftBar";
import RightBar from "../../components/Facebook/RightBar";
import CenterBar from "../../components/Facebook/CenterBar";

export default function Facebook() {
  return (
    <PageContainer>
      <AppBarContainer>
        <AppBar></AppBar>
      </AppBarContainer>
      <MainContainer container>
        <MainLeftBar item md={3}>
          <LeftBar />
        </MainLeftBar>
        <Grid item xs={12} md={6}>
          <CenterBar />
        </Grid>
        <MainRightBar item md={3}>
          <RightBar />
        </MainRightBar>
      </MainContainer>
    </PageContainer>
  );
}
