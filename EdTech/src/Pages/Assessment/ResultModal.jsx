import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ResultModal = ({ score, total, onClose, setSelectedAssessment }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
    setSelectedAssessment(null);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          p: 4,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Assessment Completed
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your Score: {score} / {total}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ResultModal;
