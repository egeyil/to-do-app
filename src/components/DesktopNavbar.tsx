"use client"
import { Tabs } from "@components/Tabs";
import { LeftItemsCounter } from "@components/ui/LeftItemsCounter";
import { ClearCompleted } from "@components/ui/ClearCompleted";

interface DesktopNavbarProps {
  leftItems: number;
  showClear: boolean;
  clearCompleted: () => void;
}

export const DesktopNavbar = ({ leftItems, showClear, clearCompleted }: DesktopNavbarProps) => {
  return (
    <nav
      className={"hidden sm:flex justify-between items-center gap-4 px-5 py-4 bg-dmVeryDarkDesaturatedBlue text-sm text-dmDarkGrayishBlue"}
    >
      <LeftItemsCounter leftItems={leftItems}/>
      <div className={"hidden sm:flex w-2/6 justify-between gap-4"}>
        <Tabs/>
      </div>
      <ClearCompleted clearCompleted={clearCompleted} showClear={showClear}/>
    </nav>
  );
};
