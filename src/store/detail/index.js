import {
    reqAddUpdateShopCart,
    reqGooodsInfo
} from "@/api";
import {getUUID} from "@/utils/uuid_token";

const state = {

    goodinfo: {},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodinfo) {

        // goodinfo.skuInfo.forEach((cur)=>{
        //     !cur.skuDefaultImg &&  (cur.skuDefaultImg='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages4.10qianwan.com%2F10qianwan%2F20190608%2Fb_0_201906080345398746.jpg&refer=http%3A%2F%2Fimages4.10qianwan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663130876&t=804af0e55688995c970dfbf226e8ba20')
        // })

        state.goodinfo = goodinfo


    }
}
const actions = {


    async getGoodinfo({commit}, skuid) {
        let res = await reqGooodsInfo(skuid);
        if (res.code === 200) {
            commit('GETGOODINFO', res.data)

        }


    },
    async addUpdateShopCart({commit}, {skuId, skuNum}) {


        let res = await reqAddUpdateShopCart(skuId, skuNum)
        if (res.code === 200) {

            return"ok"
        }else{

          return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {


    categoryView(state) {
        return state.goodinfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodinfo.skuInfo || {}
    },
    spuSaleAttrList(state) {

        return state.goodinfo.spuSaleAttrList || []
    }
}


export default {
    state,
    mutations,
    actions,
    getters


}
