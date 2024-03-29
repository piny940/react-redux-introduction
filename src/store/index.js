import { applyMiddleware, combineReducers, createStore as BaseCreateStore } from "redux";
import tasksReducer from "../reducers/tasks";
import logger from "redux-logger";
import storageMiddleware from "../middlewares/local-storage";
import thunk from "redux-thunk";


const middlewares = [
  // logger,
  storageMiddleware,
  thunk,
];

const createStore = history => {
  const savedState = JSON.parse(window.localStorage.getItem('app-state'));
  const reducer = combineReducers({
    tasks: tasksReducer,
  });

  return BaseCreateStore(
    reducer,
    savedState || reducer(),
    applyMiddleware(
      ...middlewares,
    )
  );
};


export default createStore;
