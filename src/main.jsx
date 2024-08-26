import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// Import Pages from src
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Combo from "./Pages/Combo";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Import Layout
import Layout from "./components/Layout"; // Import the Layout component

const router = createBrowserRouter([
  {
    element: <Layout />, // Use Layout for all routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
