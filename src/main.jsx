

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import customRounter from "./components/Routing";
import './index.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application with the RouterProvider
root.render(
  <React.StrictMode>
    <RouterProvider router={customRounter} />
  </React.StrictMode>
);