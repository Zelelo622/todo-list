import React from "react";
import AddTodoInput from "../components/AddTodoInput";
import TodoList from "../components/TodoList";
import { observer } from "mobx-react";
import TodoTools from "../components/TodoTools";

const HomePage = observer(() => {
  return (
    <main className="main">
      <section className="todo">
        <div className="container">
          <div className="todo__inner">
            <h1 className="todo__title">ToDo List</h1>
            <AddTodoInput />
            <TodoTools />
            <TodoList />
          </div>
        </div>
      </section>
    </main>
  );
});

export default HomePage;
