import { Container, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import CardCourses from "../../Components/CardCourses/CardCourses";

function DashCourses() {
  const { user, courses, dashCourses, setDashCourses } =
    useContext(AuthContext);

  useEffect(() => {
    const filterCourses = courses.filter((course) => {
      return (
        !course?.students?.includes(user.id) && course.status === "approved"
      );
    });
    setDashCourses(filterCourses);
  }, [user.id, courses, setDashCourses]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {dashCourses?.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <CardCourses course={card}></CardCourses>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DashCourses;
