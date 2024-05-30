import { jwtDecode } from "jwt-decode";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";

function SetUser({ children }) {
  const { setUser, setLoading } = useContext(AuthContext);
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
      }
    }
    setLoading(false);
  }, [setUser, setLoading]);
  return children;
}

export default SetUser;
