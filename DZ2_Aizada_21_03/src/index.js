import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { newRouter } from "./router/config/routerConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={newRouter} />);
