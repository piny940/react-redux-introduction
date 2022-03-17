import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore as BaseCreateStore } from "redux";
import tasksReducer from "../reducers/tasks";
import logger from "redux-logger";


const createStore = history => {
  return BaseCreateStore(
    combineReducers({
      tasks: tasksReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      logger,
    )
  );
};


export default createStore;
