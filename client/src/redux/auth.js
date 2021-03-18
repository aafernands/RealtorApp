import API from "../utils/API";
// global state for authentification

const jwt = require("jsonwebtoken");

const initialState = {
	name: "",
	email: "",
	password: "",
	errorMessage: "",
	token: "",
	favorite: [],
	propertyViewed: [],
	authenticated: false,
};

export const register = (data) => (dispatch) => {
	API.register(data).then((result) => {
		dispatch({
			type: "CLEAR_ERROR",
		});
		dispatch({
			type: "LOGIN",
			payload: result.data,
		});
	});
};

export const checkAuth = () => (dispatch) => {
	const token = localStorage.getItem("token");
	API.getUserData().then((result) => {
		if (token) {
			dispatch({
				type: "LOGIN",
				payload: { token },
			});

			console.log("******************** result.data **********************");
			console.log(result.data);
			if (result.data) {
				dispatch({
					type: "INIT_USER_DATA",
					payload: result.data,
				});
			}
		}
	});
};

/**
 * [1.1]
 * on the redux dispatch we post the request
 * to send email and password to the server
 */
// set redux actions
export const login = () => (dispatch, getState) => {
	const { email, password } = getState().auth;
	const user = { email, password };
	// client side: send email & password to server api ( POST: /signin => body { email, password } )
	API.auth(user)
		.then((response) => {
			/**
			 * [1.7]
			 * got response from server ( contain the signed jwt token )
			 */
			// the "resposne" has return from the server api
			dispatch({
				type: "CLEAR_ERROR",
			});
			dispatch({
				type: "LOGIN",
				payload: response.data,
			});
		})
		.then(() => {
			API.getUserData().then((result) => {
				if (result.data) {
					dispatch({
						type: "INIT_USER_DATA",
						payload: result.data,
					});
				}
			});
		})
		.catch((error) => {
			dispatch({
				type: "ADD_ERROR",
			});
		});
};

export const logout = () => async (dispatch) => {
	await dispatch({
		type: "LOGOUT",
	});
};

export const setEmail = (payload) => {
	return {
		type: "EMAIL",
		payload,
	};
};

export const setName = (payload) => {
	return {
		type: "NAME",
		payload,
	};
};

export const setPassword = (payload) => {
	return {
		type: "PASSWORD",
		payload,
	};
};

export const markAsViewed = (listingId) => (dispatch) => {
	API.markAsViewed(listingId).then((result) => {
		dispatch({
			type: "SET_VIEWED",
			payload: listingId,
		});
	});
};

export const setFavorite = (payload) => {
	return {
		type: "SET_FAVORITE",
		payload,
	};
};

export const removeFavorite = (payload) => {
	return {
		type: "REMOVE_FAVORITE",
		payload,
	};
};
// creating reducer
const reducer = (auth = initialState, action) => {
	switch (action.type) {
		case "CLEAR_ERROR":
			return { ...auth, errorMessage: "" };
		case "ADD_ERROR":
			return { ...auth, errorMessage: "Wrong user name or password" };
		case "EMAIL":
			return { ...auth, email: action.payload };
		case "NAME":
			return { ...auth, name: action.payload };
		case "PASSWORD":
			return { ...auth, password: action.payload };
		// FAVORITE
		case "SET_FAVORITE":
			return { ...auth, favorite: [...auth.favorite, action.payload] };
		case "REMOVE_FAVORITE":
			return {
				...auth,
				favorite: auth.favorite.filter(
					(propertyId) => propertyId !== action.payload
				),
			};

		// VIEWED
		case "SET_VIEWED":
			return {
				...auth,
				propertyViewed: [...auth.propertyViewed, action.payload],
			};
		case "INIT_USER_DATA":
			return {
				...auth,
				favorite: action.payload.favorite,
				propertyViewed: action.payload.propertyViewed,
			};
		case "LOGIN":
			/**
			 * [1.8]
			 * redux reducer: save token to localStorage so when user refresh they stay login
			 */
			localStorage.setItem("token", action.payload.token);
			const { name } = jwt.decode(action.payload.token);
			return {
				...auth,
				token: action.payload.token,
				errorMessage: "",
				authenticated: true,
				name,
			};
		case "LOGOUT":
			localStorage.removeItem("token");
			// localStorage.removeItem("favorite");
			return {
				...auth,
				token: null,
				errorMessage: "",
				authenticated: false,
				favorite: [],
			};
		default:
			return auth;
	}
};
// creating reducer
export default reducer;
