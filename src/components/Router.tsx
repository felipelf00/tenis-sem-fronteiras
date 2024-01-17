import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import QuemSomos from "./QuemSomos";
import Institucional from "./Institucional";
import ComoAjudar from "./ComoAjudar";
import Patrocinadores from "./Patrocinadores";
import Contato from "./Contato";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "quem",
          element: <QuemSomos />,
        },
        {
          path: "institucional",
          element: <Institucional />,
        },
        {
          path: "ajudar",
          element: <ComoAjudar />,
        },
        {
          path: "patrocinadores",
          element: <Patrocinadores />,
        },
        {
          path: "contato",
          element: <Contato />,
        },
        {
          path: "quem",
          element: <QuemSomos />,
        },
        {
          path: "quem",
          element: <QuemSomos />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

// export const routes = [
//   { title: "Home", element: "#" },
//   { title: "Quem somos", element: "#" },
//   { title: "Institucional", element: "#" },
//   { title: "Como ajudar", element: "#" },
//   { title: "Patrocinadores", element: "#" },
//   { title: "Contato", element: "#" },
// ];
