import { useContext, useState, useRef } from "react";
import { Context } from "../Context/Context";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function Code({ textContent }) {
  const {
    fontSize,
    borderRadius,
    textColor,
    fontWeight,
    fontStyle,
    textShadow,
    boxShadow,
    backgroundColor,
    paddingX,
    paddingY,
  } = useContext(Context);

  const [click, setClick] = useState(true);
  const buttonRef = useRef();

  const [copyState, setCopyState] = useState("Copy to clipboard");

  function handleClick() {
    setClick(() => !click);
  }

  const textToCopy = `.button {
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
    color: ${textColor};
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
    text-shadow: ${textShadow};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    padding: ${paddingX}px ${paddingY}px;
  }`;

  function coppyToClipboard() {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyState("Copied to clipboard!");
        setTimeout(() => {
          setCopyState("Copy to clipboard");
        }, 3000);
      })
      .catch(() => {
        setCopyState("Failed to copy!");
        console.error("Failed to copy!");
        setTimeout(() => {
          setCopyState("Copy to clipboard");
        }, 3000);
      });
  }

  const downloadAsPng = (event) => {
    event.preventDefault();
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      domtoimage
        .toPng(buttonElement)
        .then((dataUrl) => {
          saveAs(dataUrl, "button.png");
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  return (
    <>
      <div className="w-1/3 mx-auto rounded-xl bg-[#8b6cb6] p-2 flex justify-around mb-2 mt-8">
        <button
          onClick={handleClick}
          className={`w-1/2 bg-[${click ? "#A7C7E7" : "#8b6cb6"}] mx-2`}
          disabled={click}
        >
          CSS CLASS
        </button>
        <button
          onClick={handleClick}
          className={`w-1/2 bg-[${
            !click ? "#A7C7E7" : "#8b6cb6"
          }] mx-2 my-auto`}
          disabled={!click}
        >
          PNG IMAGE
        </button>
      </div>
      <div className="w-1/3 mx-auto my-0 border-4 border-[#8b6cb6] rounded-xl p-3">
        {!click ? (
          <div className="bg-gray-900 p-4 rounded-md h-[150px] flex justify-center items-center">
            <button
              className="downloadAnchor bg-transparent text-blue-400"
              href="#"
              onClick={downloadAsPng}
            >
              download PNG
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 p-4 rounded-md h-[150px] overflow-y-auto font-mono text-sm text-gray-200">
            <div className="h-1/2">
              <button
                onClick={coppyToClipboard}
                className={`downloadAnchor bg-transparent ${
                  copyState === "Copied to clipboard!"
                    ? "text-green-400"
                    : copyState === "Failed to copy!"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}
                disabled={
                  copyState === "Copied to clipboard!" ||
                  copyState === "Failed to copy!"
                }
              >
                {copyState}
              </button>
            </div>
            <p>
              <span className="text-blue-400">.button</span>{" "}
              <span className="text-gray-200">&#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-400">
                font-size
              </span>: <span className="text-pink-500">{fontSize}</span>px;
              <br />
              &nbsp;&nbsp;<span className="text-green-400">
                border-radius
              </span>: <span className="text-pink-500">{borderRadius}</span>px;
              <br />
              &nbsp;&nbsp;<span className="text-green-400">color</span>:{" "}
              <span className="text-pink-500">{textColor}</span>;<br />
              &nbsp;&nbsp;<span className="text-green-400">
                font-weight
              </span>: <span className="text-pink-500">{fontWeight}</span>;
              <br />
              &nbsp;&nbsp;<span className="text-green-400">
                font-style
              </span>: <span className="text-pink-500">{fontStyle}</span>;<br />
              &nbsp;&nbsp;<span className="text-green-400">
                text-shadow
              </span>: <span className="text-pink-500">{textShadow}</span>;
              <br />
              &nbsp;&nbsp;<span className="text-green-400">
                box-shadow
              </span>: <span className="text-pink-500">{boxShadow}</span>;<br />
              &nbsp;&nbsp;
              <span className="text-green-400">background-color</span>:{" "}
              <span className="text-pink-500">{backgroundColor}</span>;
              <br />
              &nbsp;&nbsp;<span className="text-green-400">padding</span>:{" "}
              <span className="text-pink-500">{paddingX}</span>px{" "}
              <span className="text-pink-500">{paddingY}</span>px;
              <br />
              <span className="text-gray-200">&#125;</span>
            </p>
          </div>
        )}
      </div>
      <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
        <button
          ref={buttonRef}
          style={{
            fontSize: `${fontSize}px`,

            borderRadius: `${borderRadius}px`,

            color: `${textColor}`,

            fontWeight: `${fontWeight}`,

            fontStyle: `${fontStyle}`,

            textShadow: `${textShadow}`,

            boxShadow: `${boxShadow}`,

            backgroundColor: `${backgroundColor}`,

            padding: `${paddingX}px ${paddingY}px`,
          }}
        >
          {textContent}
        </button>{" "}
      </div>
    </>
  );
}
