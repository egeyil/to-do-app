"use client";
import { Tab } from "@lib/types";
import { useAppStore } from "@lib/store";

export const TabButton = ({ tabName }: { tabName: Tab }) => {
  const { tab: currentTab, setTab } = useAppStore();

  return (
    <button
      className={`hover:text-primaryBrightBlue ${
        currentTab === tabName
          ? "text-primaryBrightBlue hover:text-primaryBrightBlue"
          : ""
      }`}
      onClick={() => {
        setTab(tabName);
      }}
    >
      {tabName}
    </button>
  );
};
