import { makeAutoObservable } from "mobx";

export default class TodoStore {
  constructor() {
    this._todos = [];
    makeAutoObservable(this);
  }

  addTodoItem(title) {
    this._todos.push({ title, completed: false });
  }

  removeTodoItem(index) {
    this._todos.splice(index, 1);
  }

  completedTodoItem(index) {
    const [todo] = this._todos.splice(index, 1);
    todo.completed = true;
    this._todos.push(todo);
  }

  updateTodoItem(updateTodoItem) {
    const index = this._todos.findIndex(
      (todo) => todo.id === updateTodoItem.id
    );
    if (index !== -1) {
      this._todos[index] = updateTodoItem;
    }
  }

  setTodos(todos) {
    this._todos = todos;
  }

  get todos() {
    return this._todos;
  }
}
