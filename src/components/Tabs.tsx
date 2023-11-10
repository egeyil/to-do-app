"use client";
import { TabButton } from "@components/ui/TabButton";
import { useAppStore, useCompletedTodos, useIncompleteTodos } from "@lib/store";

export const Tabs = () => {
  const [currentTab, setTab] = useAppStore((state) => [
    state.tab,
    state.setTab,
  ]);
  const completed = useCompletedTodos();
  const incomplete = useIncompleteTodos();

  if (completed.length === 0 && currentTab === "Completed") setTab("All");
  if (incomplete.length === 0 && currentTab === "Active") setTab("All");

  return (
    <>
      <TabButton tabName={"All"} setTab={setTab} currentTab={currentTab} />
      <TabButton
        tabName={"Active"}
        setTab={setTab}
        currentTab={currentTab}
        disabled={incomplete.length === 0}
      />
      <TabButton
        tabName={"Completed"}
        setTab={setTab}
        currentTab={currentTab}
        disabled={completed.length === 0}
      />
    </>
  );
};
