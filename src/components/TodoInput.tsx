import { constants } from "@lib/constants";
import React, { SetStateAction } from "react";
import { forwardRef } from "react";

interface TodoInputProps {
  input: string;
  setInput: React.Dispatch<SetStateAction<string>>;
  placeholder?: string;
  name?: string;
  checked?: boolean;
}

export const TodoInput = forwardRef<HTMLInputElement, TodoInputProps>(
  function TodoInput(
    { input, setInput, placeholder, name, checked }: TodoInputProps,
    ref,
  ) {
    return (
      <input
        autoComplete={"off"}
        ref={ref}
        placeholder={placeholder}
        className={
          "w-full pr-3 caret-primaryBrightBlue placeholder:text-dmDarkGrayishBlue hover:cursor-pointer focus:outline-0 dark:bg-dmVeryDarkDesaturatedBlue dark:hover:text-dmMainTextHover" +
          (checked
            ? " text-lmLightGrayishBlue line-through dark:text-dmSecondaryText"
            : "")
        }
        name={name}
        type="text"
        value={input}
        maxLength={constants.MAX_INPUT_LENGTH}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        // onKeyDown={(e) => {
        //
        // }}
      />
    );
  },
);
