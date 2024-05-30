import { jwtDecode } from "jwt-decode";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";

function SetUser({ children }) {
  const { setUser, setLoading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    const token = jwtLocalStorage.getJwt();
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser({
        id: decodedToken.id,
        username: decodedToken.username,
        role: decodedToken.role,
      });
    }
    setLoading(false);
  }, [setUser, setLoading]);
  return children;
}

export default SetUser;
