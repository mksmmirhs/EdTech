import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { Box, CircularProgress } from "@mui/material";

function Loading({ children }) {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"screen"}
      >
        <CircularProgress />
      </Box>
    );
  }
  return children;
}

export default Loading;
