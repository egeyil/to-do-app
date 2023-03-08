"use client"
const Todo = ({ handleClick }: { handleClick: () => void }) => {


  return (
    <article className="">
      <input className="" type={"checkbox"} onClick={(e) => {
        e.stopPropagation();

      }} />
      <input className="" type="text" onClick={handleClick} />
    </article>
  );
};

export default Todo;
