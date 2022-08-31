import React, { createContext, useState } from "react";

export const OwlsBarContext = createContext()

const OwlsBarProvider =({ children} ) => {

    const context ={}
    return(
        <OwlsBarContext.Provider value={context}>{children}</OwlsBarContext.Provider>
    )
}

export default OwlsBarProvider