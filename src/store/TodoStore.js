import { makeAutoObservable } from "mobx";

export default class TodoStore {
  constructor() {
    this._todos = [];
    makeAutoObservable(this);
  }

  addTodoItem(id, title) {
    this._todos.push({ id, title, completed: false });
  }

  removeTodoItem(id) {
    const index = this._findIndex(id);
    this._todos.splice(index, 1);
  }

  completedTodoItem(id, bool) {
    const index = this._findIndex(id);
    if (index !== -1) {
      const [todo] = this._todos.splice(index, 1);
      todo.completed = bool;
      this._todos.push(todo);
    }
  }

  updateTodoItem(id, updateTodoItem) {
    const index = this._findIndex(id);
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

  _findIndex(id) {
    return this._todos.findIndex((todo) => todo.id === id);
  }
}
