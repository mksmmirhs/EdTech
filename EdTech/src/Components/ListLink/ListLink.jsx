import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

function ListLink({ text, link }) {
  return (
    <ListItem disablePadding>
      {/* Drawer link set */}
      <NavLink
        to={link}
        style={{
          textDecoration: "none",
          color: "gray",
          textTransform: "uppercase",
        }}
      >
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={text} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  );
}

export default ListLink;
