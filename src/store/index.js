import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from "@/store/home"
import search from "@/store/search"
import detail from "@/store/detail"
import shopcar from "@/store/shopcar";
import user from '@/store/user'
import trade from "@/store/trade";



export default new Vuex.Store({

    modules:{

        home,
        search,
        detail,
        shopcar,
        user,
        trade


    }


    // state: {},
    // mutations: {},
    // actions: {},
    // getters: {},




});
