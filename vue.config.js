module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html',
      title: 'A-rin chan Messenger',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/sass/prepends.sass"',
      },
    },
  },
}