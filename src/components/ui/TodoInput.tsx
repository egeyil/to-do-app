import constants from "@lib/constants";
import React, { SetStateAction } from "react";
import { forwardRef } from "react";

interface TodoInputProps {
  input: string;
  setInput: React.Dispatch<SetStateAction<string>>;
  placeholder?: string;
  name?: string;
}

export const TodoInput = forwardRef<HTMLInputElement, TodoInputProps>(
  function TodoInput(
    { input, setInput, placeholder, name }: TodoInputProps,
    ref,
  ) {
    return (
      <input
        autoComplete={"off"}
        ref={ref}
        placeholder={placeholder}
        className={
          "dark:hover:text-dmMainTextHover w-full pr-3 caret-primaryBrightBlue transition-all duration-300 placeholder:text-dmDarkGrayishBlue hover:cursor-pointer focus:outline-0 dark:bg-dmVeryDarkDesaturatedBlue"
        }
        name={name}
        type="text"
        value={input}
        maxLength={constants.MAX_INPUT_LENGTH}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    );
  },
);
