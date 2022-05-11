//react
import { createContext, useState, useEffect } from "react";

function GlobalProvider({ children }) {
  const GlobalContext = createContext();

  return <GlobalContext.Provider value={{}} />;
}

export default GlobalProvider;
