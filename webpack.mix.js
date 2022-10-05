const mix = require('laravel-mix');

const PUBLIC_PATH = {
    root: 'public',
    assets: 'public/assets',
    vendor: 'public/vendor',
};

const RESOURCE_PATH = {
    js: 'resources/js',
    css: 'resources/css',
    sass: 'resources/sass',
    assets: 'resources/js/assets',
}

mix.alias({
    '@': `${RESOURCE_PATH.js}`,
    '@pages': `${RESOURCE_PATH.js}/pages`,
    '@assets': `${RESOURCE_PATH.js}/assets`,
    '@layouts': `${RESOURCE_PATH.js}/layouts`,
    '@components': `${RESOURCE_PATH.js}/components`,
});

mix.styles([
    `${RESOURCE_PATH.assets}/dist/css/style.min.css`,
], `${PUBLIC_PATH.root}/css/vendor.css`)

mix.scripts([
    `${RESOURCE_PATH.assets}/dist/js/custom.js`,
    `${RESOURCE_PATH.assets}/dist/js/waves.js`,
    `${RESOURCE_PATH.assets}/dist/js/sidebarmenu.js`,
    `${RESOURCE_PATH.assets}/dist/js/dashboard.js`,
    `${RESOURCE_PATH.assets}/dist/js/app-style-switcher.js`,
], `${PUBLIC_PATH.root}/js/vendor.js`)

mix.autoload({
    jquery: ['$', 'window.jQuery']
});

mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js')
    .copy('node_modules/popper.js/dist/popper.min.js', 'public/js')

mix.js(`${RESOURCE_PATH.js}/index.js`, `${PUBLIC_PATH.root}/js`)
    .sass(`${RESOURCE_PATH.sass}/app.scss`, `${PUBLIC_PATH.root}/css`)
    .vue({ version: 2 });

mix.version();