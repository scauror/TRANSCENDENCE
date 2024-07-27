import { useStore } from 'vuex'

const	ASSETS_ROOT = new URL('@assets/', import.meta.url) + '/';

const utils = {
	updatePageTitle(title) {
		useStore().dispatch('updatePageTitle', title);
	},
	loadAsset(asset) {
		return (ASSETS_ROOT + asset);
	},
}

export default utils
