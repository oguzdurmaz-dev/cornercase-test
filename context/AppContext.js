import { createContext, useState } from "react";

const AppContext = createContext();


export const AppProvider = ({ children }) => {

    const [currentStation,setCurrentStation]=useState(null);
    const [volume,setVolume]=useState(50)
  const [visibility, setVisibility] = useState(false);

    return (
        <AppContext.Provider value={{ currentStation,setCurrentStation,volume,setVolume,visibility, setVisibility }}>
          {children}
        </AppContext.Provider>
      );
}

export default AppContext;