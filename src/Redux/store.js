import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as productReducer } from "./AppReducer/reducer"
import { reducer as authReducer } from "./AuthReducer/reducer"
import { reducer as adminReducer } from "./AdminReducer/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    productReducer, authReducer, adminReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))