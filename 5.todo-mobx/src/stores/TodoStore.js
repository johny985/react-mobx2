import { observable, action, computed, makeObservable } from "mobx";

class TodoStore {
  constructor() {
    makeObservable(this);
  }
  @observable
  _todo = {};

  @observable
  _todos = [];

  get todo() {
    return this._todo;
  }

  get todos() {
    return this._todos;
  }

  @action
  setTodoProps(name, value) {
    this._todo = {
      ...this._todo,
      [name]: value,
    };
  }

  @action
  addTodo(todo) {
    this._todos.push(todo);
  }
}

export default new TodoStore();
