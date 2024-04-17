import { Grid } from "@mui/material";
import AppBar from "../../components/AppBar";
import {
  AppBarContainer,
  MainContainer,
  MainLeftBar,
  MainRightBar,
  PageContainer,
} from "./Facebook.style";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import CenterBar from "../../components/CenterBar";

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
