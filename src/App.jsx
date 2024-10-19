import './App.css'
import Button from './components/Button.jsx'
import StylingSection from './components/StylingSection.jsx'
import { useState } from "react";
import Input from "./components/Input.jsx";

function App() {

  const [styles, setStyles] = useState({
    fontSize: 48,
    borderRadius: 8,
    textColor: "black",
    fontWeight: "normal",
    fontStyle: "normal",
    textShadow: `none`,
  });

  const [textContent, setTextContent] = useState("Click me!");

  function updateStyles(key, value) {
    setStyles({
      ...styles,
      [key]: value,
    });
  }

  return (
    <>
      <h1 className="text-7xl mx-auto mt-20">Button Generator App</h1>
      <Input textContent={textContent} setTextContent={setTextContent} />
      <Button textShadow={styles.textShadow} fontStyle={styles.fontStyle} fontWeight={styles.fontWeight} textColor={styles.textColor} textContent={textContent} fontSize={styles.fontSize} borderRadius={styles.borderRadius} />
      <StylingSection textColor={styles.textColor} fontSize={styles.fontSize} borderRadius={styles.borderRadius} setStyles={updateStyles} />
    </>
  );
}

export default App
