import { Button, Card, CardActions, CardHeader } from "@mui/material";

function CardCourses({ course }) {
  return (
    <Card
      sx={{
        margin: 5,
        width: "100%",
        backgroundColor: "lightgray",
      }}
    >
      <CardHeader
        title={course.title}
        subheader={`Total module: ${course.modules.length}`}
      />

      <CardActions disableSpacing>
        <Button variant="outlined">View Details</Button>
      </CardActions>
    </Card>
  );
}

export default CardCourses;
