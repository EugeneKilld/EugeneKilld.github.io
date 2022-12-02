import { combineReducers } from "redux";
import { pockemonsReducer } from "./pockemons/pockemonsSlice";

export const rootReducer = combineReducers({
    pockemonsReducer
});