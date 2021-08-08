import { SET_LOADER, CLOSE_LOADER, SET_DATA ,SET_LIKED, SET_INITLIKED } from '../actions/types'
const initState = {
	loading: false,
	errors: [],
	data: [],
	liked: []
};
export const Fetchalldata = (state = initState, action) => {
	const { type, payload } = action;
	if (type === SET_LOADER) {
		return { ...state, loading: true };
	} else if (type === SET_INITLIKED) {
		if(state.length){
			return state;
		}else{
		return {
			...state,
			liked: [...state.liked, ...payload]
		}}
	}
	else if (type === CLOSE_LOADER) {
		return { ...state, loading: false };
	}  else if (type === SET_DATA) {
		return {
			...state,
			data: payload,
		};
	} else if (type === SET_LIKED) {
		var p = false;
		var f = state.liked;
		var index;
		for (let i = 0; i < state.liked.length; i++) {
			if (JSON.stringify(state.liked[i]) === JSON.stringify(payload)) {
				p = true;index=i;
				break;
			}
		}
		if (p) {
			var array = [...state.liked]; // make a separate copy of the array
				array.splice(index, 1);
				localStorage.setItem("liked", JSON.stringify(array))
				return {
				...state,
				liked: array
			}
		}
		else {
			localStorage.setItem("liked", JSON.stringify([...state.liked, payload]))
			return {
				...state,
				liked: [...state.liked, payload]
			}
		}
	}
	else {
		return state;
	}
};