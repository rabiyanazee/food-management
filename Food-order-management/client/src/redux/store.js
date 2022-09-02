import { combineReducers, applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loadingReducer from "./reducers/loadingReducer";
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import productReducer from "./reducers/productReducers";
import filterReducer from "./reducers/filterReducer";
import cartReducer from "./reducers/cartReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
