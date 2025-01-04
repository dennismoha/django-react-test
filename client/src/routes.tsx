import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/";

import NotFound from "./404"; // Import NoPage component

import About from "./pages/about";
import Home from "./pages/home/home";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default AppRouter;
