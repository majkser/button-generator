import { createContext, useState,  } from "react";

export const Context = createContext({
  fontSize: 48,
  borderRadius: 8,
  textColor: "black",
  fontWeight: "normal",
  fontStyle: "normal",
  textShadow: `none`,
  shadowDistance: 0,
  updateStyles: () => { },
  changingInput: () => { },
});

export default function ContextProvider({ children }) {

  const [styles, setStyles] = useState({
    fontSize: 48,
    borderRadius: 8,
    textColor: "black",
    fontWeight: "normal",
    fontStyle: "normal",
    textShadow: `none`,
  });

  function updateStyles(key, value) {
    setStyles({
      ...styles,
      [key]: value,
    });
  }


  return (
    <Context.Provider value={{
      ...styles,
      updateStyles,
    }}>
      {children}
    </Context.Provider>
  );
}