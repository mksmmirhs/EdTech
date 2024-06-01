import { Box, Divider, Grid } from "@mui/material";
import { useContext } from "react";
import CardWebinar from "../../Components/CardWebinar/CardWebinar";

import CardCourses from "../../Components/CardCourses/CardCourses";
import { AuthContext } from "../../AuthContext/AuthProvider";

function Home() {
  const { webinars, courses } = useContext(AuthContext);

  return (
    <Box component="div" m={4}>
      {/* Featured webinar */}
      <Divider>Webinars</Divider>
      <Grid container spacing={4} mt={4} sx={{ flexGrow: 1 }}>
        {webinars.map((webinar) =>
          // if approved show the card to ui
          webinar.status === "approved" ? (
            <Grid
              key={webinar.id}
              item={true}
              xs={12}
              sm={6}
              md={4}
              mb={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardWebinar webinar={webinar}></CardWebinar>
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>

      {/* Featured Courses */}
      <Divider sx={{ mt: 4 }}>Courses</Divider>
      <Grid container spacing={4} mt={4} sx={{ flexGrow: 1 }}>
        {courses.map((course) =>
          // if approved show the card to ui

          course.status === "approved" ? (
            <Grid
              key={course.id}
              item={true}
              xs={12}
              sm={6}
              md={4}
              mb={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardCourses course={course}></CardCourses>
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </Box>
  );
}

export default Home;
