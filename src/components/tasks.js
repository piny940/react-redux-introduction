import React from "react";
import { inputTask, resetInput, addTask } from "../actions/tasks";

export class TodoApp extends React.Component {
  render = () => {
    const store = this.props.store;
    const { task, tasks } = store.getState();
    return (
      <div>
        <input type="text" value={task} onChange={e => store.dispatch(inputTask(e.target.value))} />
        <input type="button" onClick={e => {
          store.dispatch(resetInput());
          store.dispatch(addTask(task));
        }} value="add" />
        <ul>
          {
            tasks.map((task, id) => (<li key={id}>{task}</li>))
          }
        </ul>
      </div>
    );
  }
}
