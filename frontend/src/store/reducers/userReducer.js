// authReducer.js
const initialState = {
	isLoggedIn: false,
	isNewUser: false,
	authData: null,
	permissions: {
		hasSmsPermission: false,
		isGmailConnected: false,
	},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				isNewUser: true,
				isLoggedIn: true,
				authData: action.payload,
			};
		case "RELOGIN":
			return {
				...state,
				isNewUser: false,
				isLoggedIn: true,
				authData: action.payload,
			};
		case "SET_GMAIL_DATA":
			return {
				...state,
				permissions: {
					...state.permissions,
					isGmailConnected: true,
				},
				gmailData: action.payload,
			};
		case "SET_IS_NEW_USER":
			return {
				...state,
				isNewUser: action.payload,
			};
		case "LOGOUT":
			return initialState;
		default:
			return state;
	}
};

export default authReducer;
