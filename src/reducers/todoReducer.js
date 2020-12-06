const initialState = {
  completed: [],
  pending: [],
  select: {
    id: 0,
    title: "",
  },
};
const TodoReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case "ADD_TODO":
      return { ...state, pending: [...state.pending, payload] };

    case "GET_TODOS":
      return { ...state };
    case "MARK_COMPLETE":
      return {
        ...state,
        completed: [
          ...state.completed,
          { id: state.completed.length + 1, title: payload.title },
        ],
        pending: [
          ...state.pending.slice(
            0,
            state.pending.findIndex((item) => item.id === payload.id)
          ),
          ...state.pending.slice(
            state.pending.findIndex((item) => item.id === payload.id) + 1
          ),
        ],
      };
    case "MARK_PENDING":
      return {
        ...state,
        pending: [
          ...state.pending,
          { id: state.pending.length + 1, title: payload.title },
        ],
        completed: [
          ...state.completed.slice(
            0,
            state.completed.findIndex((item) => item.id === payload.id)
          ),
          ...state.completed.slice(
            state.completed.findIndex((item) => item.id === payload.id) + 1
          ),
        ],
      };
    default:
      return { ...state };
  }
};
export default TodoReducer;
