import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./config/routes";
import { ThemeProvider } from "@mui/material";

function App() {
  const router = createBrowserRouter(
    routes.map((r) => ({
      ...r,
      element: (
        <ThemeProvider theme={r.theme}>
          <r.component />
        </ThemeProvider>
      ),
    })),
  );
  return <RouterProvider router={router} />;
}

export default App;
