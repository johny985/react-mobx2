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
    let { todos, searchText } = this.props.todoStore;

    todos = todos.filter(
      (el) => el.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );

    console.log(todos);

    return <TodoListView todos={todos} onSelectedTodo={this.onSelectedTodo} />;
  }
}

export default TodoListContainer;
