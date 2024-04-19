import { Grid } from "@mui/material";
import {
  MainLeftBar,
  MainRightBar,
  PageContainer,
} from "./Instagram.style";
import RightBar from "../../components/Instagram/RightBar";
import CenterBar from "../../components/Instagram/CenterBar";
import LeftBar from "../../components/Instagram/LeftBar";

export default function Instagram() {
  return (
    <PageContainer container>
      <MainLeftBar item md={3}>
        <LeftBar />
      </MainLeftBar>
      <Grid item xs={12} md={6}>
        <CenterBar />
      </Grid>
      <MainRightBar item md={3}>
        <RightBar />
      </MainRightBar>
    </PageContainer>
  );
}
