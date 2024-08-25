import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// Import Pages from src
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Combo from "./Pages/Combo";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/combos",
    element: <Combo />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
