import Vue from 'vue'
import App from './App.vue'

//注册全局组件
import TypeNav from "@/components/TypeNav";
import swiper from "@/components/Swiper";
import Pagination from "@/components/Pagination";
import * as API from '@/api'
import {Button, MessageBox} from 'element-ui'

Vue.component(TypeNav.name, TypeNav)
Vue.component(swiper.name, swiper)
Vue.component(Pagination.name, Pagination)
// import {reqCategoryList} from '@/api'


import '@/mock/mockserver'
import "swiper/css/swiper.css"

Vue.config.productionTip = false
Vue.component(Button.name, Button)
// Vue.component(MessageBox.name,MessageBox)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
import router from '@/router'
import store from '@/store'
import atm from '@/assets/1.gif'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
    preLoad: 1.3,
    loading: atm,
    attempt: 1
})
import "@/plugins/validate";


new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
    },
    router,
    store,

}).$mount('#app')
