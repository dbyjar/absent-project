require('bootstrap');

window._ = require('lodash');
window.Vue = require('vue').default;
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import { router } from './router/index'
import App from './layouts/Index.vue'

const files = require.context('./components/global/', true, /\.vue$/i)
files
    .keys()
    .map(key => {
        const name = key.split('/').pop().split('.')[0]
        const component = files(key).default

        Vue.component(name, component)
    })

new Vue({
    router,
    render: root => root(App),
    data: () => ({
        baseURL: 'localhost'
    })
}).$mount("#app");

// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
