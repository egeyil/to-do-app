import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      className={`px-3 py-2 transition-opacity duration-300 ${
        disabled === true
          ? "hover:cursor-default"
          : "hover:cursor-pointer hover:text-primaryBrightBlue"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
