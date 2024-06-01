import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  Button,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import CourseModules from "./CourseModules";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [takenCourse, setTakenCourse] = useState(null);
  const { id } = useParams();
  const { courses, setLoading, user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const selectedCourse = courses.find((course) => course.id === parseInt(id));
    if (selectedCourse) {
      // Disable student from viewing pending course
      if (user.role === "student" && selectedCourse.status === "pending") {
        setCourse(null);
      } else {
        setCourse(selectedCourse);
        // Set student taken course
        if (
          selectedCourse.students &&
          selectedCourse.students.includes(user.id)
        ) {
          setTakenCourse(true);
        }
      }
    } else {
      setCourse(null);
    }
    setLoading(false);
  }, [courses, id, setLoading, user.role, user.id]);

  if (!course) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Course not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {course.title}
          </Typography>
          {user.role !== "student" ? (
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Status:{" "}
              {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
            </Typography>
          ) : (
            ""
          )}
          {/* course module ui */}
          {takenCourse ? (
            <CourseModules course={course}></CourseModules>
          ) : user.role !== "student" ? (
            <CourseModules course={course}></CourseModules>
          ) : (
            ""
          )}
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            padding: 2,
            justifyContent: "space-between",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          {!takenCourse && user.role === "student" ? (
            <Box>
              <Button size="small" variant="contained" color="primary">
                Take course
              </Button>
            </Box>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default CourseDetails;
