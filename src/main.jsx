// import React from 'react';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>  {/* Wrap your App with BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

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