import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import DashBoard from "../Layout/DashBoard";
import PrivateRoute from "./PrivateRoute";
import CreateWebinar from "../Pages/CreateWebinar/CreateWebinar";
import CreateCourse from "../Pages/CreateCourse/CreateCourse";
import CreateAssessment from "../Pages/CreateAssessment/CreateAssessment";
import DashHomePage from "../Pages/DashHomePage/DashHomepage";
import DashCourses from "../Pages/DashCourses/DashCourses";
import EnrolledCourses from "../Pages/EnrolledCourse/EnrolledCourses";
import EnrolledWebinar from "../Pages/EnrolledWebinar/EnrolledWebinar";
import DashWebinar from "../Pages/DashWebinar/DashWebinar";

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHomePage></DashHomePage>,
      },
      {
        path: "createwebinar",
        element: <CreateWebinar></CreateWebinar>,
      },
      {
        path: "createcourse",
        element: <CreateCourse></CreateCourse>,
      },
      {
        path: "createassessment",
        element: <CreateAssessment></CreateAssessment>,
      },
      {
        path: "courses",
        element: <DashCourses></DashCourses>,
      },
      {
        path: "enrolledcourses",
        element: <EnrolledCourses></EnrolledCourses>,
      },
      {
        path: "enrolledwebinars",
        element: <EnrolledWebinar></EnrolledWebinar>,
      },
      {
        path: "webinars",
        element: <DashWebinar></DashWebinar>,
      },
    ],
  },
]);

export default route;
