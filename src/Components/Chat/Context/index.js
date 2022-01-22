import { createContext, useState } from "react";

const NavStateContext = createContext();
const NavStateProvider = ({ children }) => {
  const [showMessages, setShowMessages] = useState( false );

  const value = { showMessages, setShowMessages };


  return (
    <NavStateContext.Provider value={value}>
      {children}
    </NavStateContext.Provider>
  );
};
export {NavStateContext,NavStateProvider} ;
