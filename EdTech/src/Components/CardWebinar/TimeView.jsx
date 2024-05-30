import { Box, Typography } from "@mui/material";

function TimeView({ time, index }) {
  return (
    <Box
      sx={{
        backgroundColor: "skyblue",

        display: "flex",
        flexDirection: "column",
        color: "#fff",
        maxWidth: 1 / 3,
        p: 1,
      }}
    >
      <Typography>{`Slot: ${index + 1}`}</Typography>
      <Typography>{`Date: ${time.date}`}</Typography>
      <Typography>{`Time: ${time.time}`}</Typography>
    </Box>
  );
}

export default TimeView;
