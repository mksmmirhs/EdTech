import { Box, Typography } from "@mui/material";

function TimeView({ time, index }) {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        borderRadius: 1,
        p: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        minWidth: "120px",
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle2">{`Slot: ${index + 1}`}</Typography>
      <Typography variant="body2">{`Date: ${time.date}`}</Typography>
      <Typography variant="body2">{`Time: ${time.time}`}</Typography>
    </Box>
  );
}

export default TimeView;
