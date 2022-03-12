import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import tasksReducer from './reducers/tasks';
import { TodoApp } from './components/tasks';


const store = createStore(tasksReducer);

const renderApp = () => {
  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(renderApp);
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
