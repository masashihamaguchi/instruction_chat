module.exports = {
    css: {
        loaderOptions: {
        sass: {
            prependData: '@import "./src/assets/sass/prepends.sass"',
        },
        },
    },
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',
}