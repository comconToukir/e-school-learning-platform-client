import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => { },
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("cupcake");

  const value = {
    theme,
    setTheme
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
};