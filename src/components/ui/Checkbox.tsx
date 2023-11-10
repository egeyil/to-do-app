import React, { SetStateAction } from "react";
import { Button } from "@components/ui/Button";

interface CheckboxProps {
  checked: boolean;
  setChecked: React.Dispatch<SetStateAction<boolean>>;
}

export function Checkbox({ checked, setChecked }: CheckboxProps) {
  return (
    <Button
      className={
        "dark:border-dmSecondaryText dark:hover:border-dmSecondaryHover flex h-5 w-5 items-center justify-center rounded-full border px-0 py-0 sm:h-6 sm:w-6"
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
    </Button>
  );
}
