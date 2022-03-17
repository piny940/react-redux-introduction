import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore as BaseCreateStore } from "redux";
import tasksReducer from "../reducers/tasks";
import logger from "redux-logger";
import storageMiddleware from "../middlewares/local-storage";


const createStore = history => {
  const savedState = JSON.parse(window.localStorage.getItem('app-state'));
  const reducer = combineReducers({
    tasks: tasksReducer,
  });

  return BaseCreateStore(
    reducer,
    savedState || reducer(),
    applyMiddleware(
      routerMiddleware(history),
      logger,
      storageMiddleware,
    )
  );
};


export default createStore;
