export function LeftItemsCounter({ leftItems }: { leftItems: number }) {
  return (
    <h4 className={"hover:cursor-default"}>{leftItems} items left</h4>
  );
}
