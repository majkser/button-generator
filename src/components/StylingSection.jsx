import { useContext } from "react";
import { Context } from "../Context/Context";

export default function StylingSection() {

    const { fontSize,
        borderRadius,
        textColor,
        shadowDistance,
        updateStyles,
        handleShadowDistanceChange,
        handleShadowDirectionChange,
    } = useContext(Context);

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
                                onChange={(event) => handleShadowDistanceChange(event)}
                            />
                            <h2>shadow direction: </h2>
                            <select onChange={(event) => handleShadowDirectionChange(event)}>
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