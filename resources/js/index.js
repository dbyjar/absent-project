require('bootstrap');

window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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

new Vue({
    router,
    render: root => root(App),
    data: () => ({
        auth: {},
    }),
    async mounted() {
        await this.getUser()
    },
    methods: {
        async getUser() {
            const token = Cookies.get("absentSession")

            const { results } = (
                await axios.get(`/api/get_user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            ).data ?? {}

            if (
                results.message === "Token is Invalid"
                || results.message === "Token is Expired"
                || results.message === "Authorization Token not found"
            ) {
                if (this.$route.name !== "login") {
                    await Cookies.remove("absentSession")
                    return this.$router.push({
                        name: "login",
                        query: {
                            msg: results.message
                        }
                    });
                }

                return;
            }

            this.auth = results.data
        }
    }
}).$mount("#app");

// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
