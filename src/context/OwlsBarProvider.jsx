import React, { createContext, useState } from "react";


export const OwlsBarContext = createContext()

const OwlsBarProvider =({children}) => {    
    const getUsuario = localStorage.getItem('usuario')
    const getSenha = localStorage.getItem('senha')    
    const loginA = getUsuario&&getSenha
    const [login, setLogin] = useState(false)   

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
    const [input, setInput] = useState({
        usuario: "",
        senha: "",
    });
    const handleChange = (target, key) => {
        const value = target.value;
        setInput({ ...input, [key]: value });
    };
    
    const handleLogout = ()=>{
        localStorage.clear()
        setLogin(false)
    }


    const context ={
        loginA:loginA,
        input:input,
        usuarios:usuarios,
        login: login,
        handleChange:handleChange,        
        handleLogout:handleLogout,
        setLogin: setLogin,
    }
    return(
        <OwlsBarContext.Provider value={context}>{children}</OwlsBarContext.Provider>
    )
}

export default OwlsBarProvider