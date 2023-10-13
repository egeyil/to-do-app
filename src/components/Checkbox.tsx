"use client"
import React, { SetStateAction } from "react";

interface CheckboxProps {
  checked: boolean;
  setChecked: React.Dispatch<SetStateAction<boolean>>;
}

export function Checkbox({ checked, setChecked }: CheckboxProps) {
  return (
    <button
      className={
        "flex items-center justify-center h-6 w-6 rounded-full border border-dmVeryDarkGrayishBlue hover:border-dmVeryDarkGrayishBlueHover"
      }
      onClick={() => setChecked(!checked)}
      type={"button"}
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
