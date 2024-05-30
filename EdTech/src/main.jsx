import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Route";
import AuthProvider from "./AuthContext/AuthProvider";
import Loading from "./Components/Loading/Loading";
import SetUser from "./Components/SetUser/SetUser";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Loading>
        <SetUser>
          <RouterProvider router={route}></RouterProvider>
        </SetUser>
      </Loading>
    </AuthProvider>
  </React.StrictMode>
);
