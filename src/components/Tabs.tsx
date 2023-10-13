import { TabButton } from "@components/TabButton";

export const Tabs = () => {
  return (
    <>
      <TabButton tabName={"All"} />
      <TabButton tabName={"Active"} />
      <TabButton tabName={"Completed"} />
    </>
  );
};
