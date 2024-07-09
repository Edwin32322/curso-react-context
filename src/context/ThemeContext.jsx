/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext("")
export const ThemeProvider = ({ children }) => {
    const initialTheme = "light"
    const [theme, setTheme] = useState(initialTheme)
    const handleTheme = (e) => {
        if (e.target.value === "light") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    const data = {
        theme,
        handleTheme
    }
    return <ThemeContext.Provider value={data} >
        {children}
    </ThemeContext.Provider>
}