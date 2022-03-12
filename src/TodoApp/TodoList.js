import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


class TodoList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render = () => {
    const tasks = this.props.tasks.map(todo => (
      <TodoItem {...todo} key={todo.id}/>
    ))

    return (
      <ul>{tasks}</ul>
    )
  };
}

export default TodoList;
