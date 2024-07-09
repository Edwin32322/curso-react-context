import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LangContext } from "../context/LanguageContext"
import { AuthContext } from "../context/AuthContext"

/* eslint-disable react/prop-types */
export const HeaderContext = () => {
    const { text, handleLang } = useContext(LangContext)
    const { theme, handleTheme } = useContext(ThemeContext)
    const { auth, handleAuth } = useContext(AuthContext)
    return (
        <header className={theme}>
            <h2>{text.headerTitle}</h2>
            <h3>{text.headerSubtitle}</h3>
            <select name="lang" onChange={handleLang}>
                <option value="es">es</option>
                <option value="en">en</option>
            </select>
            <input type="radio" name="theme" id="light" onClick={handleTheme} defaultValue="light" />
            <label htmlFor="light">{text.headerLight}</label>
            <input type="radio" name="theme" id="dark" onClick={handleTheme} defaultValue="dark" />
            <label htmlFor="dark">{text.headerDark}</label>
            <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
        </header>
    )
}
