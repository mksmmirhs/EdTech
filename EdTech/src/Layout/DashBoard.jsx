import { Outlet } from "react-router-dom";
import DashNav from "../Components/DashNav/DashNav";
import { Box, Stack } from "@mui/material";

function DashBoard() {
  return (
    <div>
      <DashNav></DashNav>
      <Stack direction="row" spacing={2}>
        <Box flex={1}></Box>
        <Box flex={6}>
          <Outlet></Outlet>
        </Box>
      </Stack>
    </div>
  );
}

export default DashBoard;
