import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Button( {textContent} ) {
    
    const { fontSize,
        borderRadius,
        textColor,
        fontWeight,
        fontStyle,
        textShadow,
    } = useContext(Context);

    return (
        <>
            <div className=" h-52 w-2/3 mx-auto mt-8 mb-4">
                <button style={{
                    fontSize: `${fontSize}px`,
                    borderRadius: `${borderRadius}px`,
                    color: textColor,
                    fontWeight: fontWeight,
                    fontStyle: fontStyle,
                    textShadow: textShadow,
                }}>{textContent}</button>
            </div>
        </>

    );
}