import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

function DashCourseCard({ course }) {
  return (
    <Card
      sx={{
        margin: 3,
        width: "100%",
        maxWidth: 345,
        backgroundColor: "#f5f5f5",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {course.title.charAt(0)}
          </Avatar>
        }
        action={
          <Tooltip title="Course Info">
            <IconButton aria-label="course info">
              <InfoIcon />
            </IconButton>
          </Tooltip>
        }
        title={course.title}
        subheader={`Total modules: ${course.modules.length}`}
        sx={{
          "& .MuiCardHeader-title": {
            fontSize: "1.25rem",
            fontWeight: "bold",
          },
          "& .MuiCardHeader-subheader": {
            color: "text.secondary",
          },
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {course.description
            ? course.description
            : "No description available for this course."}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          padding: 2,
          justifyContent: "space-between",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Box>
          <Button size="small" variant="contained" color="primary">
            View Details
          </Button>
        </Box>
        <Box>
          <Button size="small" variant="outlined" color="secondary">
            Enroll Now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default DashCourseCard;
