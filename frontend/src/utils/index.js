import { useStore } from 'vuex'

const utils = {
	updatePageTitle(title) {
		useStore().dispatch('updatePageTitle', title);
	}
}

export default utils
