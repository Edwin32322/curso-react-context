import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LangContext } from "../context/LanguageContext"

/* eslint-disable react/prop-types */
export const FooterContext = () => {
    const { text } = useContext(LangContext)
    const { theme } = useContext(ThemeContext)
    return (
        <footer className={theme}>
            <h4>{text.footerTitle}</h4>
        </footer>
    )
}
