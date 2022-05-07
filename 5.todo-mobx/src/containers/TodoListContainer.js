import React, { Component } from "react";
import TodoListView from "../views/TodoListView";
import { inject, observer } from "mobx-react";
import autobind from "autobind-decorator";

@inject("todoStore")
@observer
@autobind
class TodoListContainer extends Component {
  onSelectedTodo(todo) {
    this.props.todoStore.selectedTodo(todo);
  }
  render() {
    const { todos } = this.props.todoStore;
    return <TodoListView todos={todos} onSelectedTodo={this.onSelectedTodo} />;
  }
}

export default TodoListContainer;
