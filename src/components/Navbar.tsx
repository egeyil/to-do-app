import { useEffect, useState } from "react";
import { useAppStore } from "@lib/store";
import type { Tab } from "@lib/types";
import { TabButton } from "@components/TabButton";

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
        "flex justify-between items-center px-5 py-4 bg-dmVeryDarkDesaturatedBlue text-sm text-dmDarkGrayishBlue"
      }
    >
      <h4>{incomplete} items left</h4>
      <div className={"flex w-1/2 justify-center gap-1"}>
        <TabButton tabName={"All"} />
        <TabButton tabName={"Completed"} />
        <TabButton tabName={"Completed"} />
      </div>
      <button
        className={showClear ? "visible" : "invisible"}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </nav>
  );
};
