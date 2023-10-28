import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Features from "./pages/features/Features";
import Newbie from "./pages/Newbie";
import Junior from "./pages/Junior";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import Error from "./components/error/Error";
import QrCode from "./pages/features/qrcode/QrCode";
import ResultsSummary from "./pages/features/summary/ResultsSummary";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,

    children: [
      {
        element: <Features />,
        errorElement: <Error />,
        children: [
          {
            path: "/Features/qrcode",
            element: <QrCode />,
            errorElement: <Error />,
          },
          {
            path: "/Features/resultsAndSummary",
            element: <ResultsSummary />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/Newbie",
        element: <Newbie />,
        errorElement: <Error />,
      },
      {
        path: "/Junior",
        element: <Junior />,
        errorElement: <Error />,
      },
      {
        path: "/Intermediate",
        element: <Intermediate />,
        errorElement: <Error />,
      },
      {
        path: "/Advanced",
        element: <Advanced />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
