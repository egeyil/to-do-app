interface DeleteButtonProps {
  id: string;
  deleteTodo: (id: string) => void;
}

export const DeleteButton = ({ id, deleteTodo }: DeleteButtonProps) => {
  return (
    <button
      className={
        "flex items-center justify-center h-6 w-6 rounded-full text-dmDarkGrayishBlue invisible group-hover:visible"
      }
      onClick={() => deleteTodo(id)}
      type={"button"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </button>
  );
};
