import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Error from "./components/error/Error";
import Menu from "./components/menu/Menu";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
