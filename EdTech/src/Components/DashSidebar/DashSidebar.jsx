import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import ListLink from "../ListLink/ListLink";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import { NavLink, useNavigate } from "react-router-dom";

function DashSidebar() {
  const { menu, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    setUser(null);
    jwtLocalStorage.removeJwt();
    navigate("/");
  };
  return (
    <Box
      sx={{
        boxShadow: 3,
        height: "100vh",
        position: "fixed",
      }}
    >
      {/* home  */}
      <List>
        <ListLink text={"Home"} link={"/"}></ListLink>
      </List>
      <Divider></Divider>
      {/* dynamic menu */}
      {menu.map((item) => (
        <List key={item.name}>
          <ListLink text={item.name} link={item.link}></ListLink>
          <Divider></Divider>
        </List>
      ))}
      {/* logout */}
      <List>
        <ListItem disablePadding>
          {/* Drawer link set */}
          <NavLink
            style={{
              textDecoration: "none",
              color: "gray",
              textTransform: "uppercase",
            }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText onClick={handleLogout} primary={"Logout"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
}

export default DashSidebar;
