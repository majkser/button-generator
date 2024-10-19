export default function Button({ textShadow, fontStyle, fontWeight, textColor, textContent, fontSize, borderRadius }) {

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