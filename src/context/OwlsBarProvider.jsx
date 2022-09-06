import React, { createContext, useState } from "react";


export const OwlsBarContext = createContext()

const OwlsBarProvider =({children}) => {    
    const getUsuario = localStorage.getItem('usuario')
    const getSenha = localStorage.getItem('senha')    
    const loginA = getUsuario&&getSenha
    const [login, setLogin] = useState(false)
    const [view,setView] = useState(false)
    

    const usuarios = [
        {
        value: "gerente",
        label: "Gerente",
        senha: "gerente123",
        },
        {
        value: "garcom",
        label: "Garçom",
        senha: "garçom123",
        },
    ];
    
    
    const handleLogout = ()=>{
        localStorage.clear()
        setLogin(false)
        setInput('')
    }

    const context ={
        loginA:loginA,
        usuarios:usuarios,
        login: login,
        view:view,       
        handleLogout:handleLogout,
        setLogin: setLogin,
        setView:setView,
    }
    return(
        <OwlsBarContext.Provider value={context}>{children}</OwlsBarContext.Provider>
    )
}

export default OwlsBarProvider