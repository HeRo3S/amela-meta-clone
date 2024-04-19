import { Box, ListItemIcon, ListSubheader, styled } from "@mui/material";

export const LeftBarContainer = styled(Box)({
  position: "fixed",
  height: "100%",
  maxWidth: "25vw",
});

export const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: "inherit",
  fontSize: "1rem",
  fontWeight: "600",
  color: theme.palette.text.secondary,
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  color: "#b0b3b8",
});
