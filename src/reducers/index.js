import { combineReducers } from "redux";
import Fetchalldata from './fetchData'
export const rootReducer= combineReducers({
    allData:Fetchalldata,
})