import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
]);

export default route;
