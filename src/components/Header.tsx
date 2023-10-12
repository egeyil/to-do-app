import { ThemeSwitcher } from "@components/ThemeSwitcher";
import * as React from "react";

export const Header = () => {
  return (
    <header className={"flex justify-between items-center mb-12"}>
      <h1 className={"text-5xl font-bold tracking-[15px]"}>TODO</h1>
      <ThemeSwitcher />
    </header>
  );
};
