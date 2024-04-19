import { Theme } from "@emotion/react";
import Facebook from "../pages/Facebook";
import Instagram from "../pages/Instagram";
import { FbTheme, InstaTheme } from "./muiTheme";

interface RouteProperty {
  path: string;
  component: () => JSX.Element;
  theme: Theme;
}

const routes: RouteProperty[] = [
  { path: `/facebook`, component: Facebook, theme: FbTheme },
  { path: `/instagram`, component: Instagram, theme: InstaTheme },
];

export default routes;
