import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Context } from "..";
import TodoItem from "./TodoItem";

const TodoList = observer(() => {
  const { todos } = useContext(Context);

  const handleRemoveTodoItem = (id) => {
    todos.removeTodoItem(id);
  };

  const handleCompleteTodoItem = (id, bool) => {
    todos.completedTodoItem(id, bool);
  };

  const handleUpdateTodoItem = (id, updatedTodo) => {
    todos.updateTodoItem(id, updatedTodo);
  };

  return (
    <div className="todo__list">
      {todos.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={handleRemoveTodoItem}
          onComplete={handleCompleteTodoItem}
          onUpdate={handleUpdateTodoItem}
        />
      ))}
    </div>
  );
});

export default TodoList;
