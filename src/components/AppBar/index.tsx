import { Grid, TextField, Toolbar } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledAppBarGridContainer,
  StyledAppbarGridMainItemsContainer,
  StyledAppbarGridSubItemsContainer,
  StyledLogo,
} from "./Appbar.style";
import logoFB from "../../assets/logo_fb.png";
import SearchIcon from "@mui/icons-material/Search";

export default function AppBar() {
  return (
    <StyledAppBar>
      <StyledAppBarGridContainer container xs={12}>
        <StyledAppbarGridSubItemsContainer item md={3}>
          <StyledLogo src={logoFB} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
              <TextField placeholder="Tìm kiếm trên Facebook"></TextField>
            </SearchIconWrapper>
          </Search>
        </StyledAppbarGridSubItemsContainer>
        <StyledAppbarGridMainItemsContainer
          item
          xs={12}
          md={6}
        ></StyledAppbarGridMainItemsContainer>
        <StyledAppbarGridSubItemsContainer
          item
          md={3}
        ></StyledAppbarGridSubItemsContainer>
      </StyledAppBarGridContainer>
    </StyledAppBar>
  );
}
