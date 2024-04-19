import {
  styled,
  ListSubheader,
  ListItemText,
  Button,
  Avatar,
} from "@mui/material";
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

export const StyledListItemText = styled(ListItemText)({
  "& .MuiTypography-body2": {
    color: "#a3a3a3",
  },
});

export const StyledButton = styled(Button)({
  textTransform: "none",
  color: "#0f9bf7",
});
