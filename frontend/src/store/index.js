import { createStore } from 'vuex'
import axios from 'axios';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default createStore({
	state: {
		authUser: {},
		isAuthenticated: false,
		jwt: localStorage.getItem("token"),
		endpoints: {
			// TODO: Remove hardcoding of dev endpoints and use ENV
			obtainJWT:  import.meta.env.VITE_API_BASE_URL + 'token/',
			refreshJWT: import.meta.env.VITE_API_BASE_URL + "refresh_token/",
			baseUrl: import.meta.env.VITE_API_BASE_URL + "",
		},
	},
	mutations: {
		setAuthUser(state, { authUser, isAuthenticated }) {
			state.authUser = authUser;
			state.isAuthenticated = isAuthenticated;
		},
		updateToken(state, newToken) {
			// TODO: For security purposes, take localStorage out of the project.
			localStorage.setItem('token', newToken);
			state.jwt = newToken;
		},
		removeToken(state) {
			// TODO: For security purposes, take localStorage out of the project.
			localStorage.removeItem("token");
			state.jwt = null;
		},
	},
	actions: {
	},
	getters: {
	}
});
