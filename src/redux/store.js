import { combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";
import cartReducer from "./reducers/cartReducer";
import loginReducer from "./reducers/loginReducer";
import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";


const reducers = combineReducers({
    loginState:loginReducer,
    bookState:bookReducer,
    cartState:cartReducer,
    adminState:adminReducer,
    userState:userReducer
})

const store =createStore(reducers)

export default store