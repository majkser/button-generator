import { useContext } from "react";
import { Context } from "../Context/Context";

export default function StylingSection() {
  const {
    fontSize,
    borderRadius,
    textColor,
    shadowDistance,
    boxShadowDistance,
    backgroundColor,
    boxShadowBlur,
    shadowBlur,
    paddingX,
    paddingY,
    updateStyles,
    updateShadow,
  } = useContext(Context);

  return (
    <>
      <div className="flex justify-around">
        <div className="p-4 rounded-3xl bg-[#BBA1E0] text-center text-white w-72 shadow-lg transform hover:scale-105 hover:opacity-90 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl m-2 mb-8">Text Styling Section</h2>
          <div className="m-4">
            <h2>font size: {fontSize}px</h2>
            <input
              className="w-full accent-[#7FB3D5]"
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
                onChange={(event) =>
                  updateStyles(
                    "fontWeight",
                    event.target.checked ? "bold" : "normal"
                  )
                }
              />
              bold
            </label>
            <label className="m-4" htmlFor="italic">
              <input
                type="checkbox"
                onChange={(event) =>
                  updateStyles(
                    "fontStyle",
                    event.target.checked ? "italic" : "normal"
                  )
                }
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
              onChange={(event) =>
                updateStyles("textColor", event.target.value)
              }
            />
          </div>
          <div className="m-4">
            <label htmlFor="shadow">
              <h2>shadow distance from text: </h2>
              <input
                className="accent-[#7FB3D5]"
                type="range"
                min="0"
                max="50"
                value={shadowDistance}
                onChange={(event) =>
                  updateShadow("shadowDistance", event.target.value)
                }
              />
              <h2>shadow direction: </h2>
              <select
                className="bg-[#D4E7FE] border border-[#A3BDED] text-[#3D3D3D] p-1 rounded-lg"
                onChange={(event) =>
                  updateShadow("shadowDirection", event.target.value)
                }
              >
                <option value="top-right">↗</option>
                <option value="top-left">↖</option>
                <option value="bottom-right">↘</option>
                <option value="bottom-left">↙</option>
                <option value="center">center</option>
              </select>
              <h2 className="mt-2">shadow blur: </h2>
              <input
                className="accent-[#7FB3D5]"
                type="range"
                min="0"
                max="12"
                value={shadowBlur}
                onChange={(event) =>
                  updateShadow("shadowBlur", event.target.value)
                }
              />
            </label>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="p-4 rounded-3xl bg-[#BBA1E0] text-center text-white w-72 shadow-lg transform hover:scale-105 hover:opacity-90 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl m-2 mb-8">Button Styling Section</h2>
            <div className="m-4">
              <h2>border radius: {borderRadius}px</h2>
              <input
                className="w-full accent-[#7FB3D5]"
                type="range"
                min="1"
                max="100"
                value={borderRadius}
                onChange={(event) =>
                  updateStyles("borderRadius", event.target.value)
                }
              />
            </div>
            <div className="flex justify-center m-4">
              <h2 className="mr-4">button color: </h2>
              <input
                type="color"
                min="1"
                max="100"
                value={backgroundColor}
                onChange={(event) =>
                  updateStyles("backgroundColor", event.target.value)
                }
              />
            </div>
            <div className="m-4">
              <label htmlFor="boxShadow">
                <h2 className="mt-2">shadow distance from button: </h2>
                <input
                  className="accent-[#7FB3D5]"
                  type="range"
                  min="0"
                  max="50"
                  value={boxShadowDistance}
                  onChange={(event) =>
                    updateShadow("boxShadowDistance", event.target.value)
                  }
                />
                <h2 className="mt-2">shadow direction: </h2>
                <select
                  className="bg-[#D4E7FE] border border-[#A3BDED] text-[#3D3D3D] p-1 rounded-lg"
                  onChange={(event) =>
                    updateShadow("boxShadowDirection", event.target.value)
                  }
                >
                  <option value="top-right">↗</option>
                  <option value="top-left">↖</option>
                  <option value="bottom-right">↘</option>
                  <option value="bottom-left">↙</option>
                  <option value="center">center</option>
                </select>
                <h2 className="mt-2">shadow blur: </h2>
                <input
                  className="accent-[#7FB3D5]"
                  type="range"
                  min="0"
                  max="50"
                  value={boxShadowBlur}
                  onChange={(event) =>
                    updateShadow("boxShadowBlur", event.target.value)
                  }
                />
              </label>
            </div>
            <div className="flex justify-center">
              <div>
                <h2 className="mt-2">padding Y axis: </h2>
                <input
                  className="accent-[#7FB3D5] w-2/3"
                  type="range"
                  min="0"
                  max="100"
                  value={paddingX}
                  onChange={(event) =>
                    updateStyles("paddingX", event.target.value)
                  }
                />
              </div>
              <div>
                <h2 className="mt-2">padding X axis: </h2>
                <input
                  className="accent-[#7FB3D5] w-2/3"
                  type="range"
                  min="0"
                  max="200"
                  value={paddingY}
                  onChange={(event) =>
                    updateStyles("paddingY", event.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
