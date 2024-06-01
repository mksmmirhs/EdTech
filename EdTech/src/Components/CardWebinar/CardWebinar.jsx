import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import DateTimeFormatter from "../../utils/DateTimeFormatter";
import TimeView from "./TimeView";
import { useLocation } from "react-router-dom";

function CardWebinar({ webinar }) {
  const location = useLocation();
  console.log(location);
  return (
    <Box
      sx={{
        margin: 3,
        width: "100%",
        maxWidth: 345,
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#f9f9f9", boxShadow: 1, borderRadius: 2 }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 18, fontWeight: "bold" }}
            color="text.primary"
            gutterBottom
          >
            {webinar?.title}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", gap: 2, p: 2, flexWrap: "wrap" }}>
          {webinar.slots.map((slot, index) => {
            const time = DateTimeFormatter(slot);
            return <TimeView key={index} time={time} index={index} />;
          })}
        </Box>
        {location.pathname !== "/" ? (
          <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
            <Button size="small" variant="contained" color="primary">
              View Details
            </Button>
          </CardActions>
        ) : (
          ""
        )}
      </Card>
    </Box>
  );
}

export default CardWebinar;
