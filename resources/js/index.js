require('bootstrap');

window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Pusher = require('pusher-js');

import Vue from 'vue';
import Cookies from 'js-cookie';
import PortalVue from 'portal-vue'
import router from './router/index'
import { global } from './mixins'
import App from './layouts/Index.vue'

Vue.mixin(global);
Vue.use(PortalVue)

const files = require.context('./components/global/', true, /\.vue$/i)
files
    .keys()
    .map(key => {
        const name = key.split('/').pop().split('.')[0]
        const component = files(key).default

        Vue.component(name, component)
    })

const token = Cookies.get("absentSession") ?? ""

new Vue({
    router,
    render: root => root(App),
    data: () => ({
        auth: {},
        token: token,
        pusher: new Pusher(process.env.MIX_PUSHER_APP_KEY, {
            cluster: process.env.MIX_PUSHER_APP_CLUSTER
        }),
        headersRequestAPI: {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }),
    async mounted() {
        await this.getUser()
    },
    methods: {
        async getUser() {
            const { results } = (
                await axios.get(`/api/get_user`, this.headersRequestAPI)
            ).data ?? {}

            this.auth = results?.data
        }
    }
}).$mount("#app");