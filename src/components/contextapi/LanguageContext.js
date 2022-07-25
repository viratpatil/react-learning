// import { createContext, useContext, useState } from "react"

// export const LanguageContext = createContext();
// const LanguageContextProvider = (props) => {
//     let [a, setA] = useState(1111);
//     let [b, setB] = useState(22222);
//     return <LanguageContext.Provider value={{a,b}}>{props.children}</LanguageContext.Provider>
// }

// export const useLanguagePreferences = () => {
//     return useContext(LanguageContext);
// }

// export default LanguageContextProvider;

import { createContext, useState, useContext } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
    let [a, setA] = useState(1);
    let [b, setB] = useState(2);

    return <LanguageContext.Provider value={{a,b}}>{props.children}</LanguageContext.Provider>;
}

export const useLanguagePreferences = () => {
    return useContext(LanguageContext);
}

export default LanguageContextProvider;