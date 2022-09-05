import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const OwlsBarContext = createContext()

const OwlsBarProvider =({children}) => {
    const [usuario,setUsuario] = useLocalStorage("usuario",'')
    const [senha,setSenha] = useLocalStorage("senha",'')
    const [login, setLogin] = useState(false)   

    const context ={
        usuario:usuario,
        setUsuario: setUsuario,
        senha: senha,
        setSenha: setSenha,
        login: login,
        setLogin: setLogin,
    }
    return(
        <OwlsBarContext.Provider value={context}>{children}</OwlsBarContext.Provider>
    )
}

export default OwlsBarProvider