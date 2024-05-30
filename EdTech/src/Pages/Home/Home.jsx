import { Box, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CardWebinar from "../../Components/CardWebinar/CardWebinar";
import getAxios from "../../utils/getAxios";
import CardCourses from "../../Components/CardCourses/CardCourses";

function Home() {
  const [webinars, setWebinars] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAxios.get("webinars").then((res) => {
      setWebinars(res.data);
    });
  }, []);
  useEffect(() => {
    getAxios.get("courses").then((res) => {
      setCourses(res.data);
    });
  }, []);

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
