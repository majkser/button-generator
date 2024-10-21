import { createContext, useState, useRef } from "react";

export const Context = createContext({
  fontSize: 48,
  borderRadius: 8,
  textColor: "black",
  fontWeight: "normal",
  fontStyle: "normal",
  textShadow: `none`,
  shadowDistance: 0,
  updateStyles: () => { },
  handleShadowDistanceChange: () => { },
  handleShadowDirectionChange: () => { },
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

  const [shadowDistance, setShadowDistance] = useState(0);
  const [shadowDirection, setShadowDirection] = useState("top-right");

  function updateStyles(key, value) {
    setStyles({
      ...styles,
      [key]: value,
    });
  }

  function handleShadowDistanceChange(event) {
    const distance = event.target.value;
    setShadowDistance(distance);
    updateShadow(distance, shadowDirection);
  }

  function handleShadowDirectionChange(event) {
    const direction = event.target.value;
    setShadowDirection(direction);
    updateShadow(shadowDistance, direction);
  }

  function updateShadow(distance, direction) {
    let x = 0, y = 0;

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
      default:
        x = distance;
        y = distance;
        break;
    }
    updateStyles("textShadow", `${x}px ${y}px rgba(0, 0, 0, 0.25)`);
  }

  return (
    <Context.Provider value={{
      ...styles,
      shadowDistance,
      updateStyles,
      handleShadowDistanceChange,
      handleShadowDirectionChange,
    }}>
      {children}
    </Context.Provider>
  );
}