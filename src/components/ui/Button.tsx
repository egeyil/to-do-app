import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
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
      className={`transition-all duration-300 ${
        disabled === true
          ? "dark:text-lmInactive hover:cursor-default"
          : "hover:cursor-pointer hover:text-primaryBrightBlue"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
