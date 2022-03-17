import { connect } from "react-redux";
import { addTask, resetInput, inputTask, updateData } from "../actions/tasks";
import { TodoApp } from "../components/tasks";


const mapStateToProps = ({ tasks }) => ({
  ...tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  resetInput: () => dispatch(resetInput()),
  inputTask: task => dispatch(inputTask(task)),
  updateData: url => dispatch(updateData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
