import React, { useState } from "react";

export function Checkbox() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <button
      className={
        "flex items-center justify-center h-4 w-4 rounded-full border border-dmVeryDarkGrayishBlue hover:border-dmVeryDarkGrayishBlueHover"
      }
      onClick={() => setChecked(!checked)}
    >
      {checked ? (
        <svg
          className={"text-white"}
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      ) : null}
    </button>
  );
}
