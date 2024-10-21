import { useRef, useState, useContext } from "react";
import { Context } from "../Context/Context";

export default function StylingSection() {

    const { fontSize,
        borderRadius,
        textColor,
        updateStyles,
    } = useContext(Context);

    const [shadowDistance, setShadowDistance] = useState(0);
    const [shadowDirection, setShadowDirection] = useState("top-right");
    const selectRef = useRef(null);

    function handleShadowDistanceChange(event) {
        const distance = event.target.value;
        setShadowDistance(distance);
        updateShadow(distance, shadowDirection);
    }

    function handleShadowDirectionChange(event) {
        const direction = event.target.value;
        setShadowDirection(direction);
        updateShadow(shadowDistance, direction);
    }

    function updateShadow(distance, direction) { 
        let x = 0, y = 0;
        
        switch (direction) {
            case "top-right":
                x = distance;
                y = -distance;
                break;
            case "top-left":
                x = -distance;
                y = -distance;
                break;
            case "bottom-right":
                x = distance;
                y = distance;
                break;
            case "bottom-left":
                x = -distance;
                y = distance;
                break;
            default:
                x = distance;
                y = distance;
                break;
        }
        updateStyles("textShadow", `${x}px ${y}px rgba(0, 0, 0, 0.25)`);
    }

    return (
        <>
            <div className="flex justify-around">
                <div className="p-4 rounded-3xl bg-teal-700 text-center text-white">
                    <h2 className="text-2xl m-2 mb-8">Text Styling Section</h2>
                    <div className="m-4">
                        <h2>font size: {fontSize}px</h2>
                        <input
                            className="w-full"
                            type="range"
                            min="1"
                            max="100"
                            value={fontSize}
                            onChange={(event) => updateStyles("fontSize", event.target.value)}
                        />
                    </div>
                    <div className="m-4">
                        <h2>font type: </h2>
                        <label className="m-4" htmlFor="bold">
                            <input
                                type="checkbox"
                                onChange={(event) => updateStyles("fontWeight", event.target.checked ? "bold" : "normal")}
                            />
                            bold
                        </label>
                        <label className="m-4" htmlFor="italic">
                            <input
                                type="checkbox"
                                onChange={(event) => updateStyles("fontStyle", event.target.checked ? "italic" : "normal")}
                            />
                            italic
                        </label>
                    </div>
                    <div className="flex justify-center m-4">
                        <h2 className="mr-4">text color: </h2>
                        <input
                            type="color"
                            min="1"
                            max="100"
                            value={textColor}
                            onChange={(event) => updateStyles("textColor", event.target.value)}
                        />
                    </div>
                    <div className="m-4">
                        <label htmlFor="shadow">
                            <h2>shadow distance from text: </h2>
                            <input
                                type="range"
                                min="0"
                                max="15"
                                value={shadowDistance}
                                onChange={handleShadowDistanceChange}
                            />
                            <h2>shadow direction: </h2>
                            <select ref={selectRef} onChange={handleShadowDirectionChange}>
                                <option value="top-right">
                                    ↗
                                </option>
                                <option value="top-left">
                                    ↖
                                </option>
                                <option value="bottom-right">
                                    ↘
                                </option>
                                <option value="bottom-left">
                                    ↙
                                </option>
                            </select>
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>border radius: {borderRadius}px</h2>
                        <input
                            className="w-full"
                            type="range"
                            min="1"
                            max="100"
                            value={borderRadius}
                            onChange={(event) => updateStyles("borderRadius", event.target.value)}
                        />
                    </div>
                </div>

            </div>

        </>
    );
}