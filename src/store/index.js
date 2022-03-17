import { routerMiddleware } from "react-router-redux";
import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore as BaseCreateStore } from "redux";
import tasksReducer from "../reducers/tasks";


const createStore = history => {
  return BaseCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
};


export default createStore;
