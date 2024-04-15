import {combineReducers} from "redux";
import amountReducer from "./amountReducer";

const reducers=combineReducers({
    amount:amountReducer,
})

export default reducers
// we can add more reducer if we have 
// filhal ek hi hai 