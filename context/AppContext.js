import { createContext, useState } from "react";

const AppContext = createContext();


export const AppProvider = ({ children }) => {

    const [currentStation,setCurrentStation]=useState(null);

    return (
        <AppContext.Provider value={{ currentStation,setCurrentStation }}>
          {children}
        </AppContext.Provider>
      );
}

export default AppContext;