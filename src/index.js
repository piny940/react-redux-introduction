import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/tasks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/expenses">
      <Routes>
        <Route path="/hoge" element={<TodoApp />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
