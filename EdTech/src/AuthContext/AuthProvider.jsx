import { createContext, useEffect, useState } from "react";
import { jwtLocalStorage } from "../utils/jwtLocalStorage";
import { jwtDecode } from "jwt-decode";
import DashMenuData from "../utils/DashMenuData";
import getAxios from "../utils/getAxios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [courses, setCourses] = useState([]);
  const [dashCourses, setDashCourses] = useState([]);
  const [dashWebinar, setDashWebinar] = useState([]);
  const [dashEnrolledCourses, setDashEnrolledCourses] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [dashEnrolledWebinar, setDashEnrolledWebinar] = useState([]);
  const [assessments, setAssessments] = useState([]);

  // get webinars data
  useEffect(() => {
    getAxios.get("webinars").then((res) => {
      setWebinars(res.data);
    });
  }, []);
  // get courses data
  useEffect(() => {
    getAxios.get("courses").then((res) => {
      setCourses(res.data);
    });
  }, []);
  // get courses data
  useEffect(() => {
    getAxios.get("assessments").then((res) => {
      setAssessments(res.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    // get jwt token from local storage
    const token = jwtLocalStorage.getJwt();
    const currentTimeInMs = Date.now();

    if (token) {
      const decodedToken = jwtDecode(token);
      // checks if jwt is expired or not
      if (currentTimeInMs <= decodedToken.exp * 1000) {
        setUser({
          id: decodedToken.id,
          username: decodedToken.username,
          role: decodedToken.role,
        });
        setMenu(DashMenuData[decodedToken.role]);
      }
    }
    setLoading(false);
  }, [setUser, setLoading, setMenu]);

  // set context
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    menu,
    setMenu,
    webinars,
    setWebinars,
    courses,
    setCourses,
    dashCourses,
    setDashCourses,
    studentData,
    setStudentData,
    dashEnrolledCourses,
    setDashEnrolledCourses,
    dashWebinar,
    setDashWebinar,
    dashEnrolledWebinar,
    setDashEnrolledWebinar,
    assessments,
    setAssessments,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
