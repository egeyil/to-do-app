"use client";
import React, { SetStateAction } from "react";
import { Button } from "@components/ui/Button";

interface CheckboxProps {
  checked: boolean;
  setChecked: React.Dispatch<SetStateAction<boolean>>;
  handleUpdate?: () => Promise<void>;
}

export function Checkbox({ checked, setChecked, handleUpdate }: CheckboxProps) {
  return (
    <Button
      className={
        "flex h-5 w-5 items-center justify-center rounded-full border px-0 py-0 dark:border-dmSecondaryText dark:hover:border-dmSecondaryHover sm:h-6 sm:w-6"
      }
      onClick={async () => {
        if (handleUpdate) {
          await handleUpdate();
        }
        setChecked(!checked);
      }}
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
