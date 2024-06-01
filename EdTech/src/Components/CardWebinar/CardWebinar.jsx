import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DateTimeFormatter from "../../utils/DateTimeFormatter";
import TimeView from "./TimeView";

function CardWebinar({ webinar }) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {webinar?.title}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", gap: 2, p: 1 }}>
        {webinar.slots.map((slot, index) => {
          const time = DateTimeFormatter(slot);
          return <TimeView key={index} time={time} index={index}></TimeView>;
        })}
      </Box>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: "100%", backgroundColor: "lightgray", boxShadow: 1 }}
      >
        {card}
      </Card>
    </Box>
  );
}

export default CardWebinar;
