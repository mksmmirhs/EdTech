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
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useContext, useState } from "react";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";

const drawerWidth = 240;
const navItems = ["home"];

function NavBar(props) {
  const { user, setUser } = useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // logout function
  const handleLogout = () => {
    setUser(null);
    jwtLocalStorage.removeJwt();
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EdTech
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            {/* Drawer link set */}
            <NavLink
              to={`${item === "home" ? "/" : item}`}
              style={{
                textDecoration: "none",
                color: "gray",
                textTransform: "uppercase",
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}

        {/*  conditional logout/login button */}
        {user ? (
          <ListItem disablePadding>
            {/* Drawer link set */}
            <NavLink
              onClick={handleLogout}
              style={{ textDecoration: "none", color: "gray" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText onClick={handleLogout} primary={"Logout"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            {/* Drawer link set */}
            <NavLink
              to={`login`}
              style={{ textDecoration: "none", color: "gray" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        )}
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
        sx={{ backgroundColor: "gray" }}
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EdTech
          </Typography>
          {/* Nav Links for dextop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink key={item} to={`${item === "home" ? "/" : item}`}>
                <Button sx={{ color: "#fff" }}>{item}</Button>
              </NavLink>
            ))}
          </Box>
          {/* Add login and logout button conditionally  button */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {user ? (
              <Button sx={{ color: "#fff" }} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <NavLink to={"/login"}>
                <Button sx={{ color: "#fff" }}>Login</Button>
              </NavLink>
            )}
          </Box>
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

export default NavBar;
