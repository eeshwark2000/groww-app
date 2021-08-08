import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Fetchalldata } from './reducers/fetchData';
const rootReducers = combineReducers({
	Fetchalldata
});
const middlewares = [thunkMiddleware];
const Store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;