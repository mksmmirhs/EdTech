import { jwtDecode } from "jwt-decode";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import DashMenuData from "../../utils/DashMenuData";

function SetUser({ children }) {
  const { setUser, setLoading, setMenu } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);

    // get jwt token from local storage
    const token = jwtLocalStorage.getJwt();
    const currentTimeInMs = Date.now();

    if (token) {
      const decodedToken = jwtDecode(token);
      // checks if jwt is expired or not
      if (currentTimeInMs <= decodedToken.exp * 1000) {
        setUser({
          id: decodedToken.id,
          username: decodedToken.username,
          role: decodedToken.role,
        });
        setMenu(DashMenuData[decodedToken.role]);
      }
    }
    setLoading(false);
  }, [setUser, setLoading, setMenu]);
  return children;
}

export default SetUser;
