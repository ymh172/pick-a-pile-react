import { createBrowserRouter } from "react-router-dom";
import Menu from "../pages/Menu";
import Answer from "../pages/Answer";
import Detail from "../pages/Detail";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/answer/:questionId",
        element: <Answer />,
      },
      {
        path: "/detail/:obj",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
