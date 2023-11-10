import { Button } from "@components/ui/Button";
import React from "react";

interface ClearCompletedProps {
  clearCompleted: () => void;
  showBtn: boolean;
}

export function ClearCompleted({
  clearCompleted,
  showBtn,
  disabled,
}: ClearCompletedProps & Partial<React.ComponentProps<typeof Button>>) {
  return (
    <Button
      onClick={clearCompleted}
      disabled={disabled}
      className={`${showBtn ? "opacity-100" : "opacity-0"}`}
    >
      Clear Completed
    </Button>
  );
}
