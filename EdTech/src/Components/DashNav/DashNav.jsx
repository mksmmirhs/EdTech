import { AppBar, Box } from "@mui/material";
import DashDrawer from "../DashDrawer/DashDrawer";

function DashNav() {
  return (
    <AppBar
      position="sticky"
      sx={{ height: 64, display: { xs: "block", sm: "none" } }}
    >
      <Box display="flex" alignItems="center" height="100%">
        <DashDrawer></DashDrawer>
      </Box>
    </AppBar>
  );
}

export default DashNav;
