import { combineReducers } from "redux";
import TodoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({ todos: TodoReducer });
export default rootReducer;
