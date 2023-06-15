// authReducer.js
const initialState = {
	isLoggedIn: false,
	isNewUser: false,
	authData: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				isNewUser: true,
				isLoggedIn: true,
				authData: action.payload,
			};
		case "RELOGIN":
			return {
				isLoggedIn: true,
				authData: action.payload,
			};
		case "LOGOUT":
			return initialState;
		default:
			return state;
	}
};

export default authReducer;
