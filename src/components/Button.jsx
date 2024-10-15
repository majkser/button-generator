export default function Button({ textContent, fontSize, borderRadius }) {

    return (
        <>
            <div className=" h-52 w-2/3 mx-auto mt-8 mb-4">
                <button style={{
                    fontSize: `${fontSize}px`,
                    borderRadius: `${borderRadius}px`,
                }}>{textContent}</button>
            </div>
        </>

    );
}