import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

export class TodoApp extends React.Component {
  render = () => {
    const { task, tasks, inputTask, addTask, resetInput, updateData, data } = this.props;
    
    return (
      <div className="container">
        <div className="container">
          {Object.keys(data)}
          {Object.keys(data).map(key => {
            const value = data[key];
            if (typeof(value) !== "object") {
              return <div key={key}>{value}</div>;
            }
            else {
              return null;
            }
          })}
        </div>
        <button onClick={() => { updateData("http://127.0.0.1:8000/api/expenses/expenses/1") }}>fetch!</button>
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
