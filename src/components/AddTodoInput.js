import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { Context } from "..";

const AddTodoInput = observer(() => {
  const { todos } = useContext(Context);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (title.trim !== "") {
      todos.addTodoItem(id, title);
      setId(id + 1);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleAddItem} className="todo__form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo__input-add"
      />
      <button type="submit" className="todo__btn">
        Add
      </button>
    </form>
  );
});

export default AddTodoInput;
