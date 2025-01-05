import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/";

import NotFound from "./404"; // Import NoPage component

import About from "./pages/about";
import Home from "./pages/home/home";
import Signup from "./pages/auth/signup";
import SignIn from "./pages/auth/signIn";
import ProtectedRoute from './components/protected-routes/index'
import Details from "./pages/details";
import NewDetails from "./pages/details/new-detail";


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
        // element: <About />,
        element: <ProtectedRoute element={<About />} />
      },
      {
        path: "details",
        // element: <About />,
        element: <ProtectedRoute element={<Details />} />
      },
      {
        path: "new-details",
        // element: <About />,
        element: <ProtectedRoute element={<NewDetails/>} />
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default AppRouter;
