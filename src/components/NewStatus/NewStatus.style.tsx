import { Grid, Tab, Tabs, TextField, styled } from "@mui/material";

export const MainContainer = styled(Grid)({
  maxWidth: "100%",
  margin: "1em 0",
  padding: "1em 1em 0 1em",
  backgroundColor: "#242526",
  borderRadius: "10px",
});

export const StyledGridItemFlex = styled(Grid)({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  paddingBottom: "1em",
  borderBottom: "solid 1px",
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  flexGrow: "true",
  marginLeft: theme.spacing(1),
  width: "100%",
  height: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "#ffffff",
    backgroundColor: "#3a3b3c",
    borderRadius: "2em",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "2em",
  },
}));

export const StyledTabs = styled(Tabs)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const StyledTab = styled(Tab)({
  flexGrow: "1",
});
