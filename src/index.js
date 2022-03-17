import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import TodoApp from './containers/tasks';
import Test from './components/tasks';
import createStore from './store/index.js';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route index element={<TodoApp />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
