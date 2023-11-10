import { Tabs } from "@components/Tabs";
import * as React from "react";
import { LeftItemsCounter } from "@components/ui/LeftItemsCounter";
import { ClearCompleted } from "@components/ui/ClearCompleted";

interface MobileNavbarProps {
  leftItems: number;
  showClear: boolean;
  clearCompleted: () => void;
}

export const MobileNavbar = ({ leftItems, showClear, clearCompleted }: MobileNavbarProps) => {
  return (
    <>
      <nav
        className={"flex justify-between items-center gap-4 px-5 py-4 bg-dmVeryDarkDesaturatedBlue text-sm text-dmDarkGrayishBlue"}
      >
        <LeftItemsCounter leftItems={leftItems}/>
        <ClearCompleted clearCompleted={clearCompleted} showClear={showClear}/>
      </nav>
      <nav
        className={"text-sm bg-dmVeryDarkDesaturatedBlue mt-8 py-3.5 px-5 rounded flex sm:hidden w-full justify-center gap-9"}>
        <Tabs/>
      </nav>
    </>
  )
    ;
};
