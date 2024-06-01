import { Container, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import CardWebinar from "../../Components/CardWebinar/CardWebinar";

function EnrolledWebinar() {
  const { user, webinars, dashEnrolledWebinar, setDashEnrolledWebinar } =
    useContext(AuthContext);
  // filter enrolled webinar
  useEffect(() => {
    const filterWebinar = webinars.filter((webinar) => {
      return webinar?.students?.includes(user.id);
    });
    setDashEnrolledWebinar(filterWebinar);
  }, [user.id, webinars, setDashEnrolledWebinar]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {dashEnrolledWebinar?.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <CardWebinar webinar={card} hide={true}></CardWebinar>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EnrolledWebinar;
