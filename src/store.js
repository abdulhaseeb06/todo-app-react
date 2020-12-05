import { applyMiddleware, createStore } from "redux";
import rootRedcuer from "./rootRedcuer";
import thunk from "redux-thunk";
const store = createStore(rootRedcuer, applyMiddleware(thunk));
export default store;
