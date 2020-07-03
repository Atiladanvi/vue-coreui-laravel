const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            "@": ".."
        }
    },
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    }
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[name].js',
  },
});

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

mix.copy('node_modules/@coreui/vue/dist/coreui-vue.common.js.map', 'public/js')
mix.copy('node_modules/@coreui/coreui-chartjs/dist/js/coreui-chartjs.js.map', 'public/js/chunks/coreui-vue-chartjs.common.js.map')

mix.version()
