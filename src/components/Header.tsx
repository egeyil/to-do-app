import { ThemeSwitcher } from "@components/ThemeSwitcher";
import * as React from "react";

export const Header = () => {
  return (
    <header className={"mb-12 flex items-center justify-between"}>
      <h1
        className={"text-3xl font-bold tracking-[15px] text-white sm:text-5xl"}
      >
        TODO
      </h1>
      <ThemeSwitcher />
    </header>
  );
};
