import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function CourseModules({ course }) {
  return (
    <div>
      <Typography variant="h6" component="h3" gutterBottom>
        Modules
      </Typography>
      <List>
        {course.modules.map((module) => (
          <ListItem key={module.id} alignItems="flex-start" divider>
            <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary={module.title}
              secondary={
                <IconButton
                  href={module.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayCircleOutlineIcon />
                </IconButton>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CourseModules;
