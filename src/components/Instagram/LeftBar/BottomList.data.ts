import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { SvgIconProps } from "@mui/material";

interface ListItem {
  text: string;
  icon: React.ComponentType<SvgIconProps>;
}

export const listItems: ListItem[] = [
  { text: "Threads", icon: AlternateEmailOutlinedIcon },
  { text: "More", icon: MenuOutlinedIcon },
];
