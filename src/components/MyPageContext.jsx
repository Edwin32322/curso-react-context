import { HeaderContext } from "./HeaderContext"
import { MainContext } from "./MainContext"
import { FooterContext } from "./FooterContext"
import { ThemeProvider } from "../context/ThemeContext"
import { LangContextProvider } from "../context/LanguageContext"
import { AuthContextProvider } from "../context/AuthContext"
export const MyPageContext = () => {
    return (
        <div className="my-page">
            <AuthContextProvider>
                <ThemeProvider>
                    <LangContextProvider>
                        <HeaderContext></HeaderContext>
                        <MainContext></MainContext>
                        <FooterContext></FooterContext>
                    </LangContextProvider>
                </ThemeProvider>
            </AuthContextProvider>
        </div>
    )
}