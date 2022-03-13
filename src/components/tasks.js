import React from "react";

export class TodoApp extends React.Component {
  render = () => {
    const { task, tasks, inputTask, addTask, resetInput } = this.props;
    return (
      <div>
        <input type="text" value={task} onChange={e => inputTask(e.target.value)} />
        <input type="button" onClick={e => {
          resetInput();
          addTask(task);
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
