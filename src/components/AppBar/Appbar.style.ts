import {
  AppBar,
  Avatar,
  Fab,
  Grid,
  Tabs,
  TextField,
  styled,
} from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#242526",
  maxHeight: "70px",
  display: "flex",
});

export const StyledAppBarGridContainer = styled(Grid)({
  width: "100%",
  display: "flex",
  padding: "5px 5px",
});

export const StyledLeftGridColumn = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  display: "flex",
  "& > *": {
    marginRight: "0.5rem",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledLogo = styled(`img`)({
  width: "56px",
  height: "56px",
});

export const Search = styled(`div`)({
  maxWidth: "500px",
  display: "flex",
  position: "relative",
  borderRadius: "2em",
  backgroundColor: "#3a3b3c",
});
export const SearchIconWrapper = styled(`div`)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  paddingLeft: theme.spacing(2),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "#ffffff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "2em",
  },
}));

export const StyledCenterGridColumn = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    padding: "0 0.5rem",
  },
}));
export const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& button": {
    color: "#9a9da2",
  },
}));

export const StyledRightGridColumn = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  display: "flex",
  flexDirection: "row-reverse",
  "& > *": {
    backgroundColor: "#3a3b3c",
    color: "#ffffff",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledFab = styled(Fab)({
  backgroundColor: "#3a3b3c",
  color: "#ffffff",
  marginRight: "10px",

  "& :hover": {
    backgroundColor: "#3a3b3c",
  },
});
export const StyledAvatar = styled(Avatar)({
  width: "56px",
  height: "56px",
});
