import { useEffect, useState } from "react";
import { useAppStore } from "@lib/store";
import type { Tab } from "@lib/types";
import { TabButton } from "@components/TabButton";
import { Tabs } from "@components/Tabs";

export const Navbar = () => {
  const todos = useAppStore((state) => state.todos);
  const { tab, setTab } = useAppStore();
  const clearCompleted = useAppStore((state) => state.clearCompleted);
  const [showClear, setShowClear] = useState<boolean>(false);

  useEffect(() => {
    if (todos.filter((todo) => todo.checked).length > 0) setShowClear(true);
    else setShowClear(false);
  }, [todos]);

  const incomplete = todos.filter((todo) => !todo.checked).length;

  return (
    <nav
      className={
        "flex justify-between items-center gap-4 px-5 py-4 bg-dmVeryDarkDesaturatedBlue text-sm text-dmDarkGrayishBlue"
      }
    >
      <h4>{incomplete} items left</h4>
      <div className={"hidden sm:flex w-2/6 justify-between gap-4"}>
        <Tabs />
      </div>
      <button
        className={`transition-opacity duration-300 ${
          showClear ? "opacity-100" : "opacity-0"
        }`}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </nav>
  );
};
