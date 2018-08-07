let mix = require('laravel-mix');

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

mix.js('resources/assets/admin/js/jquery.dataTable.js','public/admin/js/jquery.dataTable.js')
   .js('resources/assets/admin/js/jquery.dataTable.bootstrap4.js','public/admin/js/jquery.dataTable.bootstrap4.js');


// mix.styles([
// 	'resources/assets/css/main.css',
// 	'resources/assets/css/main2.css'
// 	], 'public/css/all.css');

// mix.babel('resources/assets/admin/css/adminlte.css','public/admin/css/adminlte.css');
// mix.babel('resources/assets/admin/js/adminlte.js','public/admin/js/adminlte.js');
// mix.babel('resources/assets/admin/js/demo.js','public/admin/js/demo.js');



if (mix.inProduction()) {
	mix.version();
}