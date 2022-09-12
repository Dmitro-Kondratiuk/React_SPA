import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    dialogsPage : dialogReducer,
    profilePage : profileReducer,
    userPage :  usersReducer,
    auth : authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store
export  default  store;