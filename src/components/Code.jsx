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

  function handleClick() {
    setClick(() => !click);
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
          className={`w-1/2 bg-[${!click ? "#A7C7E7" : "#8b6cb6"}] mx-2`}
          disabled={!click}
        >
          PNG IMAGE
        </button>
      </div>
      <div className="w-1/3 mx-auto my-0 border-4 border-[#8b6cb6] rounded-xl p-3">
        {!click ? (
          <div>
            <a href="#" onClick={downloadAsPng}>
              download PNG
            </a>
          </div>
        ) : (
          <div>
            <p>
              .button &#123;
              <br />
              font-size: {fontSize}px;
              <br />
              border-radius: {borderRadius}px;
              <br />
              color: {textColor};
              <br />
              font-weight: {fontWeight};
              <br />
              font-style: {fontStyle};
              <br />
              text-shadow: {textShadow};
              <br />
              box-shadow: {boxShadow};
              <br />
              background-color: {backgroundColor};
              <br />
              padding: {paddingX}px {paddingY}px;
              <br />
              &#125;
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
