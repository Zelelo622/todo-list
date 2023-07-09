import React, { useContext } from "react";
import AddTodoInput from "../components/AddTodoInput";
import TodoList from "../components/TodoList";
import { observer } from "mobx-react";

const HomePage = observer(() => {
  return (
    <main className="main">
      <section className="todo">
        <div className="container">
          <AddTodoInput />
          <TodoList />
        </div>
      </section>
    </main>
  );
});

export default HomePage;
