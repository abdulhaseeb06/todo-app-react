export const addTodo = (payload) => {
  console.log("Adding");

  return {
    type: "ADD_TODO",
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: "UPDATE_TODO",
    payload,
  };
};

export const getTodos = () => ({
  type: "GET_TODOS",
});

export const markTodoComplete = (payload) => ({
  type: "MARK_COMPLETE",
  payload,
});

export const markTodoPending = (payload) => ({
  type: "MARK_PENDING",
  payload,
});
