import { SET_LOADER, CLOSE_LOADER, SET_DATA, SET_LIKED, SET_INITLIKED } from './types'
import Axios from 'axios';
export const likeunlikeitem=bank=>dispatch=>{
	dispatch({type: SET_LIKED, payload: bank})
};
export const initliked=()=>dispatch=>{
	if(localStorage.getItem('liked')===null){
		localStorage.setItem('liked',JSON.stringify([]))
	}
	let b=JSON.parse(localStorage.getItem('liked'))
	dispatch({type: SET_INITLIKED, payload:b })
};
export const Fetchalldata = (city) => {
	return async (dispatch) => {
		
		try {
			if (localStorage.getItem(city) !== null) {
				dispatch({ type: CLOSE_LOADER });
				const itemStr = localStorage.getItem(city);
				const item = JSON.parse(itemStr)
				const now = new Date()
				if (now.getTime() > item.expiry) {

					localStorage.removeItem(city)
					dispatch({ type: SET_LOADER });
					const response = await Axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`);
					const now = new Date()
					const item = {
						value: response.data,
						expiry: now.getTime() + 900000,
					}
					localStorage.setItem(city, JSON.stringify(item));
					dispatch({ type: CLOSE_LOADER });
					dispatch({ type: SET_DATA, payload: response.data });
				}
				else{
					dispatch({ type: SET_DATA, payload:item.value});
				}
			} else {
				dispatch({ type: SET_LOADER });
				const response = await Axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`);
				const now = new Date()
				const item = {
					value: response.data,
					expiry: now.getTime() + 900000,
				}
				localStorage.setItem(city, JSON.stringify(item));
				dispatch({ type: CLOSE_LOADER });
				dispatch({ type: SET_DATA, payload: response.data });
			}
		} catch (error) {
			console.log(error);
			// const { errors } = error.response.data;
			// console.log(errors)
			// dispatch({ type: CLOSE_LOADER });
			// dispatch({ type: CREATE_ERRORS, payload: errors });
		}
	};
};