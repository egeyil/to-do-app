import { BsArrowRight } from "react-icons/bs";
import { Button } from "@components/ui/Button";

interface CreateButtonProps {
  disabled: boolean;
}

export const CreateButton = ({ disabled }: CreateButtonProps) => {
  return (
    <Button
      type={"submit"}
      disabled={disabled}
      className={`dark:text-dmMainText dark:hover:text-dmMainTextHover disabled:dark:hover:text-lmInactive disabled:dark:text-lmInactive}`}
    >
      <BsArrowRight />
    </Button>
  );
};
