import { observer } from "mobx-react";
import React, { useState } from "react";

const TodoItem = observer(({ todo, onRemove, onComplete, onUpdate }) => {
  const [title, setTitle] = useState(todo.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    if (title.trim() !== "") {
      onUpdate(todo.id, { ...todo, title });
    } else {
      setTitle(todo.title);
    }
  };

  const handleCompleteClick = () => {
    if (todo.completed) {
      onComplete(todo.id, false);
    } else {
      onComplete(todo.id, true);
    }
  };

  return (
    <div className="todo__item">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleBlur}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
      <button onClick={handleCompleteClick}>
        {todo.completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
});

export default TodoItem;
