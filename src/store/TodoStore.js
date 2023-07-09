import { makeAutoObservable } from "mobx";

export default class TodoStore {
  constructor() {
    this._todos = [];
    makeAutoObservable(this);
  }

  addTodoItem(id, title) {
    this._todos.push({ id, title, completed: false });
    this._updateIndexes();
  }

  removeTodoItem(id) {
    const index = this._findIndex(id);
    this._todos.splice(index, 1);
    this._updateIndexes();
  }

  completedTodoItem(id, bool) {
    const index = this._findIndex(id);
    if (index !== -1) {
      const [todo] = this._todos.splice(index, 1);
      todo.completed = bool;
      this._todos.push(todo);
      this._updateIndexes();
    }
  }

  updateTodoItem(id, updateTodoItem) {
    const index = this._findIndex(id);
    if (index !== -1) {
      this._todos[index] = updateTodoItem;
      this._updateIndexes();
    }
  }

  removeLastTodoItem() {
    this._todos.pop();
    this._updateIndexes();
  }

  removeFirstTodoItem() {
    this._todos.shift();
    this._updateIndexes();
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

  _updateIndexes() {
    this._todos = this._todos.map((todo, index) => ({
      ...todo,
      isEven: index % 2 !== 0,
      isOdd: index % 2 === 0,
    }));
  }
}
