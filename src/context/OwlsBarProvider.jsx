import React, { createContext, useState } from "react";

export const OwlsBarContext = createContext()

const OwlsBarProvider =({children}) => {
    const [login, setLogin] = useState(false)

    const handleLoginTrue = ()=>{
        setLogin(true)
        console.log(login)

    }
    const handleLoginFalse = ()=>{
        setLogin(false)
        console.log(login)

    }

    const context ={
        login: login,
        setLogin: setLogin,
        handleLoginTrue: handleLoginTrue,
        handleLoginFalse: handleLoginFalse
    }
    return(
        <OwlsBarContext.Provider value={context}>{children}</OwlsBarContext.Provider>
    )
}

export default OwlsBarProvider