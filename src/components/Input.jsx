import { useState } from "react";

export default function Input({ textContent, setTextContent }) {

    const [numOfLetters, setNumOfLetters] = useState(9);

    function changingInput(event) {
        setTextContent(event.target.value);
        setNumOfLetters(event.target.value.length);
    }
 
    return (
        <>
            <div className="input-wrapper mt-24">
                <h3 className="mb-2">Enter your text: </h3>
                <input className="p-4 rounded-3xl bg-teal-700 text-center text-white"
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