import { Typography, Paper, Container, Avatar, Divider } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";

const DashHomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "100%", textAlign: "center" }}
      >
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 56,
            height: 56,
            margin: "auto",
          }}
        >
          <PersonIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
          Welcome, {user ? user.username : ""}!
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {user ? `Your role: ${user.role}` : ""}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          This is your personalized dashboard.
        </Typography>
      </Paper>
    </Container>
  );
};

export default DashHomePage;
