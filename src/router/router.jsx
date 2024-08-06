import { createBrowserRouter } from "react-router-dom";
import Menu from "../pages/menu";
import Answer from "../pages/answer";
import Detail from "../pages/detail";
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
