import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./config/routes";
import theme from "./config/muiTheme";
import { ThemeProvider } from "@mui/material";

function App() {
  const router = createBrowserRouter(
    routes.map((r) => ({
      ...r,
      element: <r.component />,
    })),
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
