import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Button({ textContent }) {
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

  return (
    <>
      <div className=" h-52 w-2/3 mx-auto mt-8 mb-4">
        <button
          className="transition-all duration-300"
          style={{
            fontSize: `${fontSize}px`,
            borderRadius: `${borderRadius}px`,
            color: textColor,
            fontWeight: fontWeight,
            fontStyle: fontStyle,
            textShadow: textShadow,
            boxShadow: boxShadow,
            backgroundColor: backgroundColor,
            padding: `${paddingX}px ${paddingY}px`,
          }}
        >
          {textContent}
        </button>
      </div>
    </>
  );
}
