import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Project from "../components/Project";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
          path: "/",
          element: <App />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },]
      },
  ]);

export default router;