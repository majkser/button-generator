export default function StylingSection({ fontSize, borderRadius, setStyles }) {

    return (
        <>
            <div className="flex justify-around">
                <div>
                    <h2>font size: {fontSize}px</h2>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={fontSize}
                        onChange={(event) => setStyles("fontSize", event.target.value)}
                    />
                </div>

                <div>
                    <h2>border radius: {borderRadius}px</h2>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={borderRadius}
                        onChange={(event) => setStyles("borderRadius", event.target.value)}
                    />
                </div>

            </div>

        </>
    );
}