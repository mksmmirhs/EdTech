import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Box, Container, Typography } from "@mui/material";

const MentorRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user.role === "mentor") {
    return children;
  }
  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Unauthorized
        </Typography>
        <Typography variant="body1" color="textSecondary">
          You do not have permission to view this page.
        </Typography>
      </Box>
    </Container>
  );
};

export default MentorRoutes;
