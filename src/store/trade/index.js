import {reqAddressInfo, reqOrderInfo} from "@/api";

const state = {

    address: [],
    orderinfo: {}
}
const mutations = {

    GETUSERADDRESS(state, address) {


        state.address = address.filter((cur) => {
            return cur.id !== 2175

        })

    },
    GETORDERINFO(state, orderinfo) {
        state.orderinfo = orderinfo

    }
}
const actions = {


    async getUserAddress({commit}) {

        let res = await reqAddressInfo()
        if (res.code === 200) {
            commit('GETUSERADDRESS', res.data)
        }

    },
    async getOrderInfo({commit}) {

        let res = await reqOrderInfo()
        if (res.code === 200) {

            commit('GETORDERINFO', res.data)
        }


    }
}
const getters = {}
export default {

    state,
    mutations,
    actions,
    getters
}
