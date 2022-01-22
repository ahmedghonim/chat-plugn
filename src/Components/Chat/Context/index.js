import { createContext, useState } from "react";

const NavStateContext = createContext();
const NavStateProvider = ({ children }) => {
  const [showMessages, setShowMessages] = useState(false);
  const [showMassageWindow, setShowMassageWindow] = useState(false);
  const [currantMessages, setCurrantMessages] = useState();
  
  const value = {
    showMessages,
    setShowMessages,
    showMassageWindow,
    setShowMassageWindow,
    currantMessages,
    setCurrantMessages,
  };

  return (
    <NavStateContext.Provider value={value}>
      {children}
    </NavStateContext.Provider>
  );
};
export { NavStateContext, NavStateProvider };
