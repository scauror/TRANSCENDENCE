import { createStore } from 'vuex'

export default createStore({
	state: {
		pageTitle: 'aled mdr'
	},
	mutations: {
		UPDATE_PAGE_TITLE(state, title) {
			state.pageTitle = title;
		}
	},
	actions: {
		updatePageTitle(context, title) {
			context.commit('UPDATE_PAGE_TITLE', title)
		}
	},
	getters: {
		getPageTitle: function (state) {
			return state.pageTitle;
		}
	}
})
