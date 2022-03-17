export const inputTask = task => ({
  type: "INPUT_TASK",
  payload: {
    task,
  },
});

export const resetInput = () => ({
  type: "RESET_INPUT",
});

export const addTask = task => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

export const updateData = url => (
  async (dispatch, getState) => {
    const response = await fetch(url);
    const data = await response.json();

    dispatch({
      type: "UPDATE_DATA",
      payload: {
        data: data,
      },
    });
  }
);
