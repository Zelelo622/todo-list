import { observer } from "mobx-react";
import React, { useState } from "react";

const TodoItem = observer(({ todo, onRemove, onComplete, onUpdate, className }) => {
  const [title, setTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCompleteChange = () => {
    if (todo.completed) {
      onComplete(todo.id, false);
    } else {
      onComplete(todo.id, true);
    }
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleVerifiedClick = () => {
    if (title.trim() !== "") {
      onUpdate(todo.id, { ...todo, title });
    }
    setIsEdit(false);
  };

  const handleCancelClick = () => {
    setTitle(todo.title);
    setIsEdit(false);
  };

  return (
    <div className={`todo__item ${todo.completed ? "completed" : ""} ${todo.className}`}>
      <div className="todo__item-complete">
        <div
          className={`todo__custom-checkbox${todo.completed ? " checked" : ""}`}
          onClick={handleCompleteChange}
        ></div>
        {isEdit ? (
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            autoFocus
            className="todo__input-edit"
          />
        ) : (
          <span className={`todo__text ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="todo__btns-wrap">
        {isEdit ? (
          <>
            <button
              className="todo__btn-verified todo__btn-edit btn"
              onClick={handleVerifiedClick}
            ></button>
            <button
              className="todo__btn-cancel todo__btn-remove btn"
              onClick={handleCancelClick}
            ></button>
          </>
        ) : (
          <>
            <button
              className="todo__btn-edit btn"
              onClick={handleEditClick}
            ></button>
            <button
              className="todo__btn-remove btn"
              onClick={() => onRemove(todo.id)}
            ></button>
          </>
        )}
      </div>
    </div>
  );
});

export default TodoItem;
