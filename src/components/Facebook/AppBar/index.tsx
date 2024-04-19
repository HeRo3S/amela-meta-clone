import { Tab, Tabs } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledAppBarGridContainer,
  StyledAvatar,
  StyledCenterGridColumn,
  StyledFab,
  StyledLeftGridColumn,
  StyledLogo,
  StyledRightGridColumn,
  StyledTabs,
  StyledTextField,
} from "./Appbar.style";
import logoFB from "../../../assets/facebook/logo_fb.png";
import avt from "../../../assets/facebook/avt.jpg";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StoreIcon from "@mui/icons-material/Store";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { useState } from "react";

export default function AppBar() {
  const [tabValue, setTabValue] = useState(0);
  const handleChangeTab = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <StyledAppBar>
      <StyledAppBarGridContainer container columns={12}>
        <StyledLeftGridColumn item md={3}>
          <StyledLogo src={logoFB} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledTextField placeholder="Tìm kiếm trên Facebook"></StyledTextField>
          </Search>
        </StyledLeftGridColumn>
        <StyledCenterGridColumn item xs={12} md={6}>
          <StyledTabs value={tabValue} onChange={handleChangeTab}>
            <Tab label={<HomeIcon fontSize="large" />}></Tab>
            <Tab label={<PeopleIcon fontSize="large" />}></Tab>
            <Tab label={<OndemandVideoIcon fontSize="large" />}></Tab>
            <Tab label={<StoreIcon fontSize="large" />}></Tab>
            <Tab label={<VideogameAssetIcon fontSize="large" />}></Tab>
          </StyledTabs>
        </StyledCenterGridColumn>
        <StyledRightGridColumn item md={3}>
          <StyledAvatar alt="avatar" src={avt} />
          <StyledFab>
            <NotificationsIcon fontSize="large" />
          </StyledFab>
          <StyledFab>
            <MapsUgcIcon fontSize="large" />
          </StyledFab>
          <StyledFab>
            <AppsIcon fontSize="large" />
          </StyledFab>
        </StyledRightGridColumn>
      </StyledAppBarGridContainer>
    </StyledAppBar>
  );
}
