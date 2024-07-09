import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LangContext } from "../context/LanguageContext"
import { AuthContext } from "../context/AuthContext"

/* eslint-disable react/prop-types */
export const MainContext = () => {
    const { text } = useContext(LangContext)
    const { auth } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)
    return (
        <main className={theme}>
            {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
            <p>{text.mainContent}</p>
        </main>
    )
}

