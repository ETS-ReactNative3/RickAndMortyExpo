import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducer";

const middleware = [];

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
