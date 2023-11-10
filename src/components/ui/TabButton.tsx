import { Tab } from "@lib/types";

interface TabButtonProps {
  tabName: Tab;
  currentTab: Tab;
  setTab: (tab: Tab) => void;
}

export const TabButton = ({ tabName, currentTab, setTab }: TabButtonProps) => {
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
