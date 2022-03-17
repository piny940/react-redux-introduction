import { connect } from "react-redux";
import { addTask, resetInput, inputTask } from "../actions/tasks";
import { TodoApp } from "../components/tasks";
import { push } from "react-router-redux";


const mapStateToProps = ({ tasks}) => ({
  ...tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  resetInput: () => dispatch(resetInput()),
  inputTask: task => dispatch(inputTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
