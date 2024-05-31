import { createContext, useEffect, useState } from "react";
import { jwtLocalStorage } from "../utils/jwtLocalStorage";
import { jwtDecode } from "jwt-decode";
import DashMenuData from "../utils/DashMenuData";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

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
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    menu,
    setMenu,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
