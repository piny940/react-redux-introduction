const initialState = {
  task: "",
  tasks: [],
  data: "",
};

const tasksReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task,
      };
    case "RESET_INPUT":
      return {
        ...state,
        task: "",
      };
    case "UPDATE_DATA":
      return {
        ...state,
        data: action.payload.data,
      }
    default:
      return state;
  }
};

export default tasksReducer;
