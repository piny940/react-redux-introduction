import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

export class TodoApp extends React.Component {
  render = () => {
    const { task, tasks, inputTask, addTask, resetInput } = this.props;
    console.log(this.props);
    
    return (
      <div className="container">
        <Link to="/test">testページへ</Link>
        <div>
          <input type="text" value={task} onChange={e => inputTask(e.target.value)} />
          <input type="button" onClick={e => {
            resetInput();
            addTask(task);
          }} value="add" />
        </div>
        <ul>
          {
            tasks.map((task, id) => (<li key={id}>{task}</li>))
          }
        </ul>
      </div>
    );
  }
}

export default class AnotherApp extends React.Component {
  render = () => {
    return (
      <div>
        hoge
        <Link to="/">indexへ</Link>
      </div>
    );
  }
};
