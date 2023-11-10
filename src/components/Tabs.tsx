"use client"
import { TabButton } from "@components/ui/TabButton";
import { useAppStore } from "@lib/store";

export const Tabs = () => {
  const currentTab = useAppStore((state) => state.tab);
  const setTab = useAppStore((state) => state.setTab);

  return (
    <>
      <TabButton tabName={"All"} setTab={setTab} currentTab={currentTab}/>
      <TabButton tabName={"Active"} setTab={setTab} currentTab={currentTab}/>
      <TabButton tabName={"Completed"} setTab={setTab} currentTab={currentTab}/>
    </>
  );
};
