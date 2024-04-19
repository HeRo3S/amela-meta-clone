import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { SvgIconProps } from "@mui/material";

interface ListItem {
  text: string;
  icon: React.ComponentType<SvgIconProps>;
}

export const listItems: ListItem[] = [
  { text: "Home", icon: HomeIcon },
  { text: "Search", icon: SearchIcon },
  { text: "Explore", icon: ExploreOutlinedIcon },
  { text: "Reels", icon: MovieOutlinedIcon },
  { text: "Messages", icon: SendOutlinedIcon },
  { text: "Notifications", icon: FavoriteBorderOutlinedIcon },
  { text: "Create", icon: AddBoxOutlinedIcon },
];
