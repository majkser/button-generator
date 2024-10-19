import { useState } from "react";

export default function StylingSection({ textColor, fontSize, borderRadius, setStyles }) {

    const [shadowDistance, setShadowDistance] = useState(0);

    function changingInput(event) {
        setShadowDistance(event.target.value);
        setStyles("textShadow", `${event.target.value}px ${event.target.value}px rgba(0, 0, 0, 0.25)`)
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
                            onChange={(event) => setStyles("fontSize", event.target.value)}
                        />
                    </div>
                    <div className="m-4">
                        <h2>font type: </h2>
                        <label className="m-4" htmlFor="bold">
                            <input
                                type="checkbox"
                                onChange={(event) => setStyles("fontWeight", event.target.checked ? "bold" : "normal")}
                            />
                            bold
                        </label>
                        <label className="m-4" htmlFor="italic">
                            <input
                                type="checkbox"
                                onChange={(event) => setStyles("fontStyle", event.target.checked ? "italic" : "normal")}
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
                            onChange={(event) => setStyles("textColor", event.target.value)}
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
                                onChange={changingInput}
                            />
                            <h2>shadow direction: </h2>
                            <select name="" id="">
                                <option value="">
                                    ↗
                                </option>
                                <option value="">
                                    ↖
                                </option>
                                <option value="">
                                    ↘
                                </option>
                                <option value="">
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
                            onChange={(event) => setStyles("borderRadius", event.target.value)}
                        />
                    </div>
                </div>
            
            </div>

        </>
    );
}