import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState([]);
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
