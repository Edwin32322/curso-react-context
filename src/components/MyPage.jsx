import { useState } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"
const initialTheme = "light"
const initialLang = "es"
const translation = {
    es: {
        headerTitle: "Mi aplicacion sin React Context",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenido",
        mainHello: "Hola, Usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi píe de página"
    },
    en: {
        headerTitle: "My application without React Context",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome",
        mainHello: "Hello, User",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}
const initialAuth = null
export const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme)
    const [lang, setLang] = useState(initialLang)
    const [text, setText] = useState(translation[lang])
    const [auth, setAuth] = useState(initialAuth)
    const handleTheme = (e) => {
        if (e.target.value === "light") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    const handleLang = (e) => {
        if (translation[e.target.value]) {
            if (e.target.value === "es") {
                setLang("es")
                setText(translation.es)
            } else {
                setLang("en")
                setText(translation.en)
            }
        }
    }
    const handleAuth = () => {
        if (auth) {
            setAuth(null)
        } else {
            setAuth(true)
        }
    }
    return (
        <div className="my-page">
            <Header auth={auth} handleAuth={handleAuth} text={text} theme={theme} handleLang={handleLang} handleTheme={handleTheme}></Header>
            <Main auth={auth} text={text} theme={theme}></Main>
            <Footer text={text} theme={theme}></Footer>
        </div>
    )
}