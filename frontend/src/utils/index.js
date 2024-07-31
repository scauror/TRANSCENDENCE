import store from '@store';
import axios from 'axios';

const	ASSETS_ROOT = new URL('@assets/', import.meta.url) + '/';

export function loadAsset(asset) {
	return (ASSETS_ROOT + asset);
}

export function makeApiQuery(url, method, payload, successCallback, errorCallback) {
	const DEFAULTS = {
		baseURL: store.state.endpoints.baseUrl,
		headers: {
			Authorization: `Bearer ${store.state.jwt}`,
			'Content-Type': 'application/json',
		},
		xhrFields: {
			withCredentials: true,
		},
	};
	const REQUEST_CONFIG = {
		url: url,
		method: method,
		params: payload,
	};
	axios.create(DEFAULTS)(REQUEST_CONFIG)
		.then(successCallback)
		.catch(errorCallback);
}

const utils = {
	loadAsset,
	makeApiQuery
};

export default utils;
