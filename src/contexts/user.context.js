import { useState, createContext } from "react";

export const UserContext = createContext({
  user: {},
  setUser: () => {},
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    setUser,
    loading,
    setLoading
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}