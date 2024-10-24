import { createContext, useState } from "react";

export const Context = createContext({
  fontSize: 75,
  borderRadius: 8,
  textColor: "black",
  fontWeight: "normal",
  fontStyle: "normal",
  textShadow: `none`,
  boxShadow: `none`,
  shadowDistance: 0,
  boxShadowDistance: 0,
  backgroundColor: "white",
  updateStyles: () => {},
  handleShadowDistanceChange: () => {},
  handleShadowDirectionChange: () => {},
  handleBoxShadowDistanceChange: () => {},
  handleBoxShadowDirectionChange: () => {},
});

export default function ContextProvider({ children }) {
  const [styles, setStyles] = useState({
    fontSize: 75,
    borderRadius: 8,
    textColor: "black",
    fontWeight: "normal",
    fontStyle: "normal",
    textShadow: `none`,
    boxShadow: `none`,
    backgroundColor: "white",
  });

  const [shadowDistance, setShadowDistance] = useState(0);
  const [shadowDirection, setShadowDirection] = useState("top-right");
  const [boxShadowDistance, setBoxShadowDistance] = useState(0);
  const [boxShadowDirection, setBoxShadowDirection] = useState("top-right");

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

  function handleBoxShadowDistanceChange(event) {
    const boxDistance = event.target.value;
    setBoxShadowDistance(boxDistance);
    updateBoxShadow(boxDistance, boxShadowDirection);
  }

  function handleBoxShadowDirectionChange(event) {
    const boxDirection = event.target.value;
    setBoxShadowDirection(boxDirection);
    updateBoxShadow(boxShadowDistance, boxDirection);
  }

  function updateShadow(distance, direction) {
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
      default:
        x = distance;
        y = distance;
        break;
    }
    updateStyles("textShadow", `${x}px ${y}px 5px rgba(0, 0, 0, 0.25)`);
  }

  function updateBoxShadow(distance, direction) {
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
      default:
        brake;
    }
    updateStyles("boxShadow", `${x}px ${y}px 10px rgba(0, 0, 0, 0.25)`);
  }

  return (
    <Context.Provider
      value={{
        ...styles,
        shadowDistance,
        boxShadowDistance,
        updateStyles,
        handleShadowDistanceChange,
        handleShadowDirectionChange,
        handleBoxShadowDistanceChange,
        handleBoxShadowDirectionChange,
      }}
    >
      {children}
    </Context.Provider>
  );
}
