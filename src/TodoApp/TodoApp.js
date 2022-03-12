import React from 'react';
import './TodoApp.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";


class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { title: "hoge", id: "0" },
        { title: "hage", id: "1" },
      ],
      uniqueID: 2,
    };
  }

  addTodo = title => {
    const { tasks, uniqueID } = this.state;

    this.setState({
      tasks: [
        ...tasks,
        { title: title, id: uniqueID }
      ],
      uniqueID: uniqueID + 1,
    });
  };

  todoReset = e => {
    this.setState({
      tasks: [],
    });
  }

  render = () => (
      <main>
        <h1>Todo アプリ</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
        <button onClick={this.todoReset}>リセット</button>
      </main>
  );
}

export default TodoApp;
