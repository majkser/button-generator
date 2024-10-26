import "./App.css";
import Button from "./components/Button.jsx";
import StylingSection from "./components/StylingSection.jsx";
import { useState } from "react";
import Input from "./components/Input.jsx";
import ContextProvider from "./Context/Context.jsx";

function App() {
  const [textContent, setTextContent] = useState("Click me!");

  return (
    <ContextProvider>
      <h1 className="text-7xl text-[#8b6cb6] mx-auto mt-20 mb-16">
        Button Generator App
      </h1>
      <Input textContent={textContent} setTextContent={setTextContent} />
      <Button textContent={textContent} />
      <StylingSection />
    </ContextProvider>
  );
}

export default App;
