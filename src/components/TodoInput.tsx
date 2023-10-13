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
        ref={ref}
        placeholder={placeholder}
        className={
          "w-full pr-3 hover:cursor-pointer dark:bg-dmVeryDarkDesaturatedBlue focus:outline-0 caret-primaryBrightBlue placeholder:text-dmDarkGrayishBlue"
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
