import { makeAutoObservable } from "mobx";

export default class TodoStore {
  constructor() {
    this._todos = [];
    this._evenButtonClick = false;
    this._oddButtonClick = false;
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

  setEvenButtonClick(evenButtonClick) {
    this._evenButtonClick = evenButtonClick;
    this._updateIndexes();
  }

  setOddButtonClick(oddButtonClick) {
    this._oddButtonClick = oddButtonClick;
    this._updateIndexes();
  }

  get todos() {
    return this._todos;
  }

  get evenButtonClick() {
    return this._evenButtonClick;
  }

  get oddButtonClick() {
    return this._oddButtonClick;
  }

  _findIndex(id) {
    return this._todos.findIndex((todo) => todo.id === id);
  }

  _updateIndexes() {
    this._todos = this._todos.map((todo, index) => ({
      ...todo,
      isEven: index % 2 !== 0,
      isOdd: index % 2 === 0,
      className:
        (this.evenButtonClick && index % 2 !== 0 ? "evenStyle" : "") +
        (this.oddButtonClick && index % 2 === 0 ? " oddStyle" : ""),
    }));
  }
}
