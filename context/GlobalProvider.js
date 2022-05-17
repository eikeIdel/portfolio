//react
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [project, setProject] = useState("start");
  return (
    <GlobalContext.Provider
      value={{
        project,
        setProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
