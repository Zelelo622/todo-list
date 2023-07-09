import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Context } from "..";

const TodoTools = observer(() => {
  const { todos } = useContext(Context);

  const handleRemoveLastTast = () => {
    todos.removeLastTodoItem();
  };

  const handleRemoveFirstTask = () => {
    todos.removeFirstTodoItem();
  };

  return (
    <div className="todo__toolse">
      <button
        className="todo__btn-removeLast btn"
        onClick={handleRemoveLastTast}
      >
        Удалить последнюю задачу
      </button>
      <button
        className="todo__btn-removeFirst btn"
        onClick={handleRemoveFirstTask}
      >
        Удалить первую задачу
      </button>
    </div>
  );
});

export default TodoTools;
