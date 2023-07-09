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

  const handleEvenButtonClick = () => {
    todos.setEvenButtonClick(!todos.evenButtonClick);
  };

  const handleOddButtonClick = () => {
    todos.setOddButtonClick(!todos.oddButtonClick);
  };

  return (
    <div className="todo__toolse">
      <div className="todo__toolse-wrap">
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
      <div className="todo__toolse-wrap">
        <button
          className="todo__btn-red todo__btn-removeFirst btn"
          onClick={handleEvenButtonClick}
        >
          Выделить четные задачи
        </button>
        <button
          className="todo__btn-blue todo__btn-removeFirst btn"
          onClick={handleOddButtonClick}
        >
          Выделить нечетные задачи
        </button>
      </div>
    </div>
  );
});

export default TodoTools;
