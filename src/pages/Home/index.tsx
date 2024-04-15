import { Grid } from "@mui/material";
import AppBar from "../../components/AppBar";
import { PageContainer } from "./Home.style";

export default function Home() {
  return (
    <PageContainer container>
      <Grid item xs={12}>
        <AppBar></AppBar>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={0} md={3}></Grid>
      </Grid>
    </PageContainer>
  );
}
