import { createContext, useState } from "react";

function GlobalProvider({ children }) {
  const GlobalContext = createContext();
  return <GlobalContext.Provider value={{}} />;
}

export default GlobalProvider;
