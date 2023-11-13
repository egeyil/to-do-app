import { Button } from "@components/ui/Button";

interface DeleteButtonProps {
  id: string;
  deleteTodo: (id: string) => Promise<void>;
}

export const DeleteButton = ({ id, deleteTodo }: DeleteButtonProps) => {
  return (
    <Button
      className={
        "flex h-6 w-6 items-center justify-center p-0.5 text-dmDarkGrayishBlue opacity-100 focus:opacity-50 sm:opacity-0 sm:group-hover:opacity-100"
      }
      onClick={async () => {
        await deleteTodo(id);
      }}
      type={"button"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </Button>
  );
};
