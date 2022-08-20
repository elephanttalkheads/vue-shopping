import {reqCartList, reqDeleteCartById, reqUpdateCheckedByid} from "@/api";

const actions = {

    async getCartList({commit}) {

        let res = await reqCartList();
        if (res.code === 200) {

            commit('GETCARTLIST', res.data)
        }


    },
    async deleteCartListBySkuid({commit}, skuId) {
        let res = await reqDeleteCartById(skuId)

        if (res.code === 200) {


            return "ok"
        } else {

            return Promise.reject(new Error('failed'))
        }


    },

    async updateCheckedById({commit}, {skuId, isChecked}) {

        let res = await reqUpdateCheckedByid(skuId, isChecked)
        if (res.code === 200) {

            return "ok"
        } else {
            return Promise.reject(new Error('failed'))
        }


    },
    deleteAllCheckedCart({dispatch, getters}) {
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach((item) => {

            let promise = item.isChecked === 1? dispatch('deleteCartListBySkuid',item.skuId) :''

            PromiseAll.push(promise)

        })
        return Promise.all(PromiseAll)


    },
    updateAllCartIsChecked({dispatch,state},isChecked){

        let promiseAll =[]

        state.cartList[0].cartInfoList.forEach((item)=>{

            let promise = dispatch('updateCheckedById',{

                skuId:item.skuId,
                isChecked
            })
            promiseAll.push(promise)

        })

        return Promise.all(promiseAll)

    }
}
const mutations = {

    GETCARTLIST(state, cartlsit) {

        state.cartList = cartlsit;

    }
}
const state = {
    cartList: []
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    // cartInfoList(state) {
    //     return state.cartList[0].cartInfoList || {}
    // }


}


export default {
    actions,
    mutations,
    state,
    getters


}
