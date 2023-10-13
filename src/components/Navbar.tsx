import { useEffect, useState } from "react";
import { useAppStore } from "@lib/store";
import type { Tab } from "@lib/types";

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
      <div className={"flex w-1/2 justify-center gap-5"}>
        <button
          className={`hover:text-primaryBrightBlue ${
            tab === "all"
              ? "text-primaryBrightBlue hover:text-primaryBrightBlue"
              : ""
          }`}
          onClick={() => {
            setTab("all");
          }}
        >
          All
        </button>
        <button
          className={`hover:text-dmLightGrayishBlueHover ${
            tab === "active"
              ? "text-primaryBrightBlue hover:text-primaryBrightBlue"
              : ""
          }`}
          onClick={() => {
            setTab("active");
          }}
        >
          Active
        </button>
        <button
          className={`hover:text-dmLightGrayishBlueHover ${
            tab === "completed"
              ? "text-primaryBrightBlue hover:text-primaryBrightBlue"
              : ""
          }`}
          onClick={() => {
            setTab("completed");
          }}
        >
          Completed
        </button>
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
