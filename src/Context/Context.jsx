import { createContext, useState } from "react";

export const Context = createContext({
  fontSize: 75,
  borderRadius: 24,
  textColor: "black",
  fontWeight: "normal",
  fontStyle: "normal",
  textShadow: `none`,
  boxShadow: `none`,
  shadowDistance: 0,
  boxShadowDistance: 0,
  backgroundColor: "white",
  boxShadowDirection: "center",
  shadowDirection: "center",
  boxShadowBlur: 10,
  shadowBlur: 5,
  paddingX: 20,
  paddingY: 40,
  updateStyles: () => {},
  updateShadow: () => {},
  handleShadowDistanceChange: () => {},
  handleShadowDirectionChange: () => {},
  handleBoxShadowDistanceChange: () => {},
  handleBoxShadowDirectionChange: () => {},
});

export default function ContextProvider({ children }) {
  const [styles, setStyles] = useState({
    fontSize: 75,
    borderRadius: 24,
    textColor: "black",
    fontWeight: "normal",
    fontStyle: "normal",
    textShadow: `none`,
    boxShadow: `none`,
    backgroundColor: "white",
    paddingX: 20,
    paddingY: 40,
  });

  const [shadowStyles, setShadowStyles] = useState({
    shadowDistance: 0,
    shadowDirection: "top-right",
    shadowBlur: 5,
    boxShadowDistance: 0,
    boxShadowDirection: "top-right",
    boxShadowBlur: 10,
  });

  function updateStyles(key, value) {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [key]: value,
    }));
  }

  function updateShadow(key, value) {
    setShadowStyles((prevShadowStyles) => {
      const newShadowStyles = {
        ...prevShadowStyles,
        [key]: value,
      };
      updateTextShadow(
        newShadowStyles.shadowDistance,
        newShadowStyles.shadowDirection,
        newShadowStyles.shadowBlur
      );
      updateBoxShadow(
        newShadowStyles.boxShadowDistance,
        newShadowStyles.boxShadowDirection,
        newShadowStyles.boxShadowBlur
      );
      return newShadowStyles;
    });
  }

  function updateTextShadow(distance, direction, blur) {
    let x = 0,
      y = 0;

    switch (direction) {
      case "top-right":
        x = distance;
        y = -distance;
        break;
      case "top-left":
        x = -distance;
        y = -distance;
        break;
      case "bottom-right":
        x = distance;
        y = distance;
        break;
      case "bottom-left":
        x = -distance;
        y = distance;
        break;
      case "center":
        x = 0;
        y = 0;
        break;
      default:
        x = distance;
        y = distance;
        break;
    }
    updateStyles("textShadow", `${x}px ${y}px ${blur}px rgba(0, 0, 0, 0.25)`);
  }

  function updateBoxShadow(distance, direction, blur) {
    let x = 0,
      y = 0;

    switch (direction) {
      case "top-right":
        x = distance;
        y = -distance;
        break;
      case "top-left":
        x = -distance;
        y = -distance;
        break;
      case "bottom-right":
        x = distance;
        y = distance;
        break;
      case "bottom-left":
        x = -distance;
        y = distance;
        break;
      case "center":
        x = 0;
        y = 0;
        break;
      default:
        x = distance;
        y = distance;
        break;
    }
    updateStyles("boxShadow", `${x}px ${y}px ${blur}px rgba(0, 0, 0, 0.25)`);
  }

  return (
    <Context.Provider
      value={{
        ...styles,
        ...shadowStyles,
        updateStyles,
        updateShadow,
      }}
    >
      {children}
    </Context.Provider>
  );
}
