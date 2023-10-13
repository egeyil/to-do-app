"use client";
import { useAppStore } from "@lib/store";
import { Tabs } from "@components/Tabs";
import * as React from "react";

export const MobileTabs = () => {
  const todos = useAppStore((state) => state.todos.length);

  return (
    <>
      {todos > 0 ? (
        <div
          className={
            "text-sm bg-dmVeryDarkDesaturatedBlue mt-8 py-3.5 px-5 rounded flex sm:hidden w-full justify-center gap-9"
          }
        >
          <Tabs />
        </div>
      ) : null}
    </>
  );
};
