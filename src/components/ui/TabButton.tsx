import { Tab } from "@lib/types";
import { Button } from "@components/ui/Button";
import React from "react";

interface TabButtonProps {
  tabName: Tab;
  currentTab: Tab;
  setTab: (tab: Tab) => void;
}

export const TabButton = ({
  tabName,
  currentTab,
  setTab,
  disabled = false,
}: TabButtonProps & Partial<React.ComponentProps<typeof Button>>) => {
  return (
    <Button
      disabled={disabled}
      className={`${
        currentTab === tabName
          ? "text-primaryBrightBlue hover:text-primaryBrightBlue"
          : ""
      }`}
      onClick={() => {
        setTab(tabName);
      }}
    >
      {tabName}
    </Button>
  );
};
