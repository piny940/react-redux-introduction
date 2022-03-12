import React from "react";
import PropTypes from "prop-types";


class TodoInput extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  onSubmitClicked = e => {
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  }

  render = () => (
    <div>
      <input type="text" value={this.state.inputValue} onChange={this.onChange} />
      <button onClick={this.onSubmitClicked}>作成</button>
    </div>
  );
}


export default TodoInput;
