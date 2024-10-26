import { useState, useEffect } from "react";

export default function Input({ textContent, setTextContent }) {
  const [numOfLetters, setNumOfLetters] = useState(9);
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 200;

  useEffect(() => {
    if (textContent.length > displayedText.length) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(textContent.slice(0, index + 1));
        index++;

        if (index === textContent.length) {
          setTimeout(() => {
            index = -1;
          }, 1000);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [textContent, typingSpeed]);

  function changingInput(event) {
    setTextContent(event.target.value);
    setNumOfLetters(event.target.value.length);
    setDisplayedText(event.target.value);
  }

  return (
    <>
      <div className="input-wrapper mt-24 mb-4">
        <h3 className="mb-2 text-xl">Enter your text: </h3>
        <input
          className="p-4 rounded-3xl bg-[#A7C7E7] text-center text-white shadow-2xl"
          type="text"
          maxLength="20"
          value={displayedText}
          onChange={changingInput}
        />
        <small className="input-small-text">{numOfLetters}/20</small>
      </div>
    </>
  );
}
