import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  // maintaining state of the user and data loading
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authInfo = {
    user,
    setLoading,
    setUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
