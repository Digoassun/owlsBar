import React, { createContext, useState } from "react";

export const OwlsBarContext = createContext()

const OwlsBarProvider =({children}) => {
    const [login, setLogin] = useState(false)   

    const context ={
        login: login,
        setLogin: setLogin,
    }
    return(
        <OwlsBarContext.Provider value={context}>{children}</OwlsBarContext.Provider>
    )
}

export default OwlsBarProvider