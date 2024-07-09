/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext("")
export const AuthContextProvider = ({ children }) => {
    const initialAuth = null
    const [auth, setAuth] = useState(initialAuth)
    const handleAuth = () => {
        if (auth) {
            setAuth(null)
        } else {
            setAuth(true)
        }
    }
    const data = { auth, handleAuth }
    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}