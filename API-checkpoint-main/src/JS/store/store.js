
import userReducer from "../reducers/userReducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;