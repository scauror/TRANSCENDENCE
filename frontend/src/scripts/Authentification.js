import axios from 'axios';
import { useStore } from 'vuex'
import { makeApiQuery } from '@utils'

/**
 * Returns the axios error object in case of error, `undefined` otherwise.
 * 
 * The payload must be:
 * ```json
 * {
 *   username: 'username',
 *   password: 'password'
 * }
 * ```
 */
export function authentificate(username, password) {
	const store = useStore();
	let result = undefined;
	axios
		.post(store.state.endpoints.obtainJWT, {
			username: username,
			password: password
		})
		.then((response) => {
			store.commit('updateToken', response.data.access);
			// Even though the authentication returned a user object that can be
			// decoded, we fetch it again. This way we aren't super dependant on
			// JWT and can plug in something else.
			makeApiQuery(
				'/me', 'get', {},
				(response) => {
					store.commit('setAuthUser', {
						authUser: response.data.user.username,
						isAuthenticated: true,
					});
				},
				(error) => {
					result = error;
				}
			);
		}).catch((error) => {
			result = error;
		});
	return (result);
}
