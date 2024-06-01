import { Container, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import CardCourses from "../../Components/CardCourses/CardCourses";

function EnrolledCourses() {
  const { user, courses, dashEnrolledCourses, setDashEnrolledCourses } =
    useContext(AuthContext);
  // filter enrolled course
  useEffect(() => {
    const filterCourses = courses.filter((course) => {
      return course?.students?.includes(user.id);
    });
    setDashEnrolledCourses(filterCourses);
  }, [user.id, dashEnrolledCourses, setDashEnrolledCourses, courses]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {dashEnrolledCourses?.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <CardCourses course={card} hide={true}></CardCourses>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EnrolledCourses;
