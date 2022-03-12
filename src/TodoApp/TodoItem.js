import { Component } from "react";

class TodoItem extends Component {
  render = () => (
    <li>{this.props.title}</li>
  );
}

export default TodoItem;
