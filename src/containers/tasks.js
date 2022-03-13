import { connect } from "react-redux";
import { addTask, resetInput, inputTask } from "../actions/tasks";
import { TodoApp } from "../components/tasks";


const mapStateToProps = ({ task, tasks }) => ({
  task,
  tasks
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  resetInput: () => dispatch(resetInput()),
  inputTask: task => dispatch(inputTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);