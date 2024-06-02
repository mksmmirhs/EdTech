import { Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import CardWebinar from "../../Components/CardWebinar/CardWebinar";

function PendingWebinar() {
  const { webinars } = useContext(AuthContext);

  const [pendingWebinar, setPendingWebinar] = useState([]);

  useEffect(() => {
    const filterCourses = webinars.filter((webinar) => {
      return webinar.status === "pending";
    });
    setPendingWebinar(filterCourses);
  }, [webinars]);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {pendingWebinar?.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <CardWebinar webinar={card} hide={true}></CardWebinar>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PendingWebinar;
