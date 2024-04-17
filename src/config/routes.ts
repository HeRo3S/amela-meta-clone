import Facebook from "../pages/Facebook";

interface RouteProperty {
  path: string;
  component: () => JSX.Element;
}

const routes: RouteProperty[] = [{ path: `/facebook`, component: Facebook }];

export default routes;
