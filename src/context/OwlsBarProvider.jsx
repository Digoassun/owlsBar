import React, { createContext, useState } from "react";


export const OwlsBarContext = createContext()

const OwlsBarProvider =({children}) => {    
    const getUsuario = localStorage.getItem('login')
    const getSenha = localStorage.getItem('senha')    
    const storage = getUsuario&&getSenha
    const [login, setLogin] = useState(false)
    const [view,setView] = useState(false)    
    
    const handleLogout = ()=>{
        localStorage.clear()
        setLogin(false)
        setInput('')
    }

    const context ={
        storage:storage,
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