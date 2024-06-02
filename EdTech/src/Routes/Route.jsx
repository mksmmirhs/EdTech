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
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import WebinarDetails from "../Pages/WebinarDetails/WebInarDetails";
import PendingCourses from "../Pages/PendingCourses/PendingCourses";
import PendingWebinar from "../Pages/PendingWebinar/PendingWebinar";
import AssessmentList from "../Pages/Assessment/AssessmentList";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";
import MentorRoutes from "./MentorRoutes";

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
        element: (
          <MentorRoutes>
            <CreateWebinar></CreateWebinar>
          </MentorRoutes>
        ),
      },
      {
        path: "createcourse",
        element: (
          <MentorRoutes>
            <CreateCourse></CreateCourse>
          </MentorRoutes>
        ),
      },
      {
        path: "createassessment",
        element: (
          <MentorRoutes>
            <CreateAssessment></CreateAssessment>
          </MentorRoutes>
        ),
      },
      {
        path: "courses",
        element: (
          <StudentRoutes>
            <DashCourses></DashCourses>
          </StudentRoutes>
        ),
      },
      {
        path: "enrolledcourses",
        element: (
          <StudentRoutes>
            <EnrolledCourses></EnrolledCourses>
          </StudentRoutes>
        ),
      },
      {
        path: "enrolledwebinars",
        element: (
          <StudentRoutes>
            <EnrolledWebinar></EnrolledWebinar>
          </StudentRoutes>
        ),
      },
      {
        path: "webinars",
        element: (
          <StudentRoutes>
            <DashWebinar></DashWebinar>
          </StudentRoutes>
        ),
      },
      {
        path: "course/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "webinar/:id",
        element: <WebinarDetails></WebinarDetails>,
      },
      {
        path: "pendingcourses",
        element: (
          <AdminRoutes>
            <PendingCourses></PendingCourses>
          </AdminRoutes>
        ),
      },
      {
        path: "pendingwebinar",
        element: (
          <AdminRoutes>
            <PendingWebinar></PendingWebinar>
          </AdminRoutes>
        ),
      },
      {
        path: "assessments",
        element: (
          <StudentRoutes>
            <AssessmentList></AssessmentList>
          </StudentRoutes>
        ),
      },
    ],
  },
]);

export default route;
