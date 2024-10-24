import { useState } from "react";

export default function Input({ textContent, setTextContent }) {
  const [numOfLetters, setNumOfLetters] = useState(9);

  function changingInput(event) {
    setTextContent(event.target.value);
    setNumOfLetters(event.target.value.length);
  }

  return (
    <>
      <div className="input-wrapper mt-24 mb-4">
        <h3 className="mb-2 text-xl">Enter your text: </h3>
        <input
          className="p-4 rounded-3xl bg-[#A7C7E7] text-center text-white shadow-2xl"
          type="text"
          maxLength="20"
          value={textContent}
          onChange={changingInput}
        />
        <small className="input-small-text">{numOfLetters}/20</small>
      </div>
    </>
  );
}
