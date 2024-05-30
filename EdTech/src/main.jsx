import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Route";
import AuthProvider from "./AuthContext/AuthProvider";
import Loading from "./Components/Loading/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Loading>
        <RouterProvider router={route}></RouterProvider>
      </Loading>
    </AuthProvider>
  </React.StrictMode>
);
