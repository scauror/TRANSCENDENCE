module.exports = {
  transpileDependencies: true,
  configureWebpack (config) {
    // Removes demo.html
    const index = config.plugins.findIndex(plugin => plugin.options?.filename === 'demo.html');
    if (index !== -1) {
      config.plugins.splice(index, 1);
    }
    return {
      externals: {
        'vue-i18n': 'VueI18n',
      },
    };
  },
  filenameHashing: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
}