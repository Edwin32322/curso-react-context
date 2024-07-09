/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const LangContext = createContext()
export const LangContextProvider = ({ children }) => {
    const translation = {
        es: {
            headerTitle: "Mi aplicacion CON React Context",
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
            headerTitle: "My application WITHOUT React Context",
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
    const initialLang = "es"
    const [lang, setLang] = useState(initialLang)
    const [text, setText] = useState(translation[lang])
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
    const data = {
        text,
        handleLang
    }
    return <LangContext.Provider value={data}>
        {children}
    </LangContext.Provider>
}