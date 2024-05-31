import { Outlet } from "react-router-dom";
import DashNav from "../Components/DashNav/DashNav";
import { Box, Stack } from "@mui/material";
import DashSidebar from "../Components/DashSidebar/DashSidebar";

function DashBoard() {
  return (
    <div>
      <DashNav></DashNav>
      <Stack direction="row" sx={{ mx: { xd: 1 } }}>
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
          <DashSidebar></DashSidebar>
        </Box>
        <Box flex={6}>
          <Outlet></Outlet>
        </Box>
      </Stack>
    </div>
  );
}

export default DashBoard;
