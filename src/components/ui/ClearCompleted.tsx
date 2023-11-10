export function ClearCompleted({ clearCompleted, showClear }: {
  clearCompleted: () => void;
  showClear: boolean;
}) {
  return (
    <button
      className={`transition-opacity duration-300 ${
        showClear ? "opacity-100" : "opacity-0"
      }`}
      onClick={clearCompleted}
    >
      Clear Completed
    </button>
  );
}
