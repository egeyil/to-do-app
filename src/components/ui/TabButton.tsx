import { Tab } from "@lib/types";

interface TabButtonProps {
  tabName: Tab;
  currentTab: Tab;
  setTab: (tab: Tab) => void;
  disabled?: boolean;
}

export const TabButton = ({ tabName, currentTab, setTab, disabled = false }: TabButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`px-3 py-2 ${currentTab === tabName ? "text-primaryBrightBlue hover:text-primaryBrightBlue" : ""} ${disabled === false ? "hover:text-primaryBrightBlue" : "hover:cursor-default"}`}
      onClick={() => {
        setTab(tabName);
      }}
    >
      {tabName}
    </button>
  );
};
