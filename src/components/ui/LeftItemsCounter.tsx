export function LeftItemsCounter({ leftItems }: { leftItems: number }) {
  return (
    <h4 className={"transition-all duration-700 hover:cursor-default"}>
      {leftItems} items left
    </h4>
  );
}
