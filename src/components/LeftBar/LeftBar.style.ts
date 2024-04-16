import { ListItemIcon, ListSubheader, styled } from "@mui/material";

export const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: "inherit",
  fontSize: "1rem",
  fontWeight: "600",
  color: theme.palette.text.secondary,
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  color: "#b0b3b8",
});

