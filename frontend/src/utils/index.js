const	ASSETS_ROOT = new URL('@assets/', import.meta.url) + '/';

const utils = {
	loadAsset(asset) {
		return (ASSETS_ROOT + asset);
	},
}

export default utils
