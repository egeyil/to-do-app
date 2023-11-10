import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  onClick,
  disabled = false,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`disabled:dark:text-lmInactive transition-all duration-300 hover:cursor-pointer hover:text-primaryBrightBlue disabled:hover:cursor-default ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
