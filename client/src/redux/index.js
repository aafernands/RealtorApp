import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth";

const rootReducer = combineReducers({
	auth: authReducer,
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	)
);

store.subscribe(() => {
	console.log(store.getState());
});

export default store;
