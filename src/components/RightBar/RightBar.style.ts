import {
  Avatar,
  Box,
  Button,
  ListItemIcon,
  ListSubheader,
  styled,
} from "@mui/material";

export const RightBarContainer = styled(Box)({
  position: "fixed",
  height: "100%",
  maxWidth: "25vw",
});

export const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  display: "flex",
  backgroundColor: "inherit",
  fontSize: "1rem",
  fontWeight: "600",
  color: theme.palette.text.secondary,

  "&> *": {
    fontSize: "1rem",
    fontWeight: "600",
    color: theme.palette.text.secondary,
    flexGrow: "1",
  },

  "& :nth-child(2)": {
    color: theme.palette.primary.light,
    fontWeight: "400",
    display: "flex",
    justifyContent: "end",
  },
}));

export const StyledAvatar = styled(Avatar)({
  width: "60px",
  height: "60px",
  marginRight: "10px",
});

export const StyledListItemIcon = styled(ListItemIcon)({
  color: "#b0b3b8",
});

export const StyledButton = styled(Button)({
  width: "100%",
  fontWeight: "600",
});

export const StyledDeleteButton = styled(Button)({
  backgroundColor: "#2f3031",
  width: "100%",
});
