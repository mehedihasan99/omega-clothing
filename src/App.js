import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirt.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: () => fetch("tshirt.json"),
          element: <Home></Home>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
