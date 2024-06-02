import { Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import CardCourses from "../../Components/CardCourses/CardCourses";

function PendingCourses() {
  const { courses } = useContext(AuthContext);

  const [pendingCourse, setPendingCourse] = useState([]);

  useEffect(() => {
    const filterCourses = courses.filter((course) => {
      return course.status === "pending";
    });
    setPendingCourse(filterCourses);
  }, [courses]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {pendingCourse?.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <CardCourses course={card}></CardCourses>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PendingCourses;
