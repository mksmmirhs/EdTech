import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import dayjs from "dayjs";
import SweetAlert from "../../utils/SweetAlert";
import getAxios from "../../utils/getAxios";

const WebinarDetails = () => {
  const [webinar, setWebinar] = useState(null);
  const [registered, setRegistered] = useState(false);
  const { id } = useParams();
  const { webinars, setLoading, user, setWebinars } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const selectedWebinar = webinars.find(
      (webinar) => webinar.id === parseInt(id)
    );
    if (selectedWebinar) {
      // Disable student from viewing pending webinar
      if (user.role === "student" && selectedWebinar.status === "pending") {
        setWebinar(null);
      } else {
        setWebinar(selectedWebinar);
        // Set registered status for student
        if (
          selectedWebinar.students &&
          selectedWebinar.students.includes(user.id)
        ) {
          setRegistered(true);
        }
      }
    } else {
      setWebinar(null);
    }
    setLoading(false);
  }, [webinars, id, setLoading, user.role, user.id]);

  if (!webinar) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Webinar not found
        </Typography>
      </Container>
    );
  }

  // Enroll student to webinar webinars
  const handleStudentEnroll = () => {
    const updatedWebinar = webinars.map((webinar) =>
      webinar.id === parseInt(id)
        ? { ...webinar, students: [...webinar.students, user.id] }
        : webinar
    );

    setWebinars(updatedWebinar);

    // send data to backend
    getAxios
      .patch("webinar", { webinars: updatedWebinar }) // Use the updated courses array
      .then((res) => {
        SweetAlert("Webinar status updated", "success");
      })
      .catch((err) => {
        SweetAlert(err.message || "An error occurred", "error");
      });
  };
  // approve and publish the pending webinars
  const handleApproveWebinar = () => {
    const updatedWebinar = webinars.map((webinar) =>
      webinar.id === parseInt(id) ? { ...webinar, status: "approved" } : webinar
    );

    setWebinars(updatedWebinar);

    // send data to backend
    getAxios
      .patch("webinar", { webinars: updatedWebinar }) // Use the updated courses array
      .then((res) => {
        SweetAlert("Webinar status updated", "success");
      })
      .catch((err) => {
        SweetAlert(err.message || "An error occurred", "error");
      });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {webinar.title}
          </Typography>
          {user.role !== "student" && (
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Status:{" "}
              {webinar.status.charAt(0).toUpperCase() + webinar.status.slice(1)}
            </Typography>
          )}
          <Typography variant="h6" component="h3" gutterBottom>
            Slots
          </Typography>
          <List>
            {webinar.slots.map((slot, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={dayjs(slot).format("MMMM D, YYYY h:mm A")}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            padding: 2,
            justifyContent: "space-between",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          {!registered && user.role === "student" && (
            <Box>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleStudentEnroll}
              >
                Register
              </Button>
            </Box>
          )}
          {webinar.status === "pending" && user.role === "admin" && (
            <Box>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleApproveWebinar}
              >
                Approve and publish
              </Button>
            </Box>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default WebinarDetails;
