import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useContext, useState } from "react";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import ListLink from "../ListLink/ListLink";

const drawerWidth = 240;

function DashNav(props) {
  const { setUser, menu } = useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // logout function
  const handleLogout = () => {
    setUser(null);
    jwtLocalStorage.removeJwt();
    navigate("/");
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EdTech
      </Typography>
      <Divider />
      <List>
        {/* home button  */}

        <ListLink text={"Home"} link={"/"}></ListLink>
        {/*  dynamic menu for drawer */}
        {menu.map((item) => (
          <ListLink
            key={item.name}
            text={item.name}
            link={item.link}
          ></ListLink>
        ))}

        {/* logout button  */}
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: "primary",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DashNav;
