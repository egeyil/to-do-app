"use client"
import { MobileNavbar } from "@components/MobileNavbar";
import { DesktopNavbar } from "@components/DesktopNavbar";
import { useAppStore } from "@lib/store";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const todos = useAppStore((state) => state.todos);

  const clearCompleted = useAppStore((state) => state.clearCompleted);
  const [showClear, setShowClear] = useState<boolean>(false);

  useEffect(() => {
    if (todos.filter((todo) => todo.checked).length > 0) setShowClear(true);
    else setShowClear(false);
  }, [todos]);

  const leftItems = todos.filter((todo) => !todo.checked).length;

  if (todos.length === 0) return null;
  else {
    return (
      <>
        <DesktopNavbar clearCompleted={clearCompleted} showClear={showClear} leftItems={leftItems}/>
        <MobileNavbar/>
      </>
    );
  }
};
