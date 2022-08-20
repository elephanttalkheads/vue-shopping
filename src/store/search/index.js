
import {reqGetSearchInfo} from  "@/api"
const actions = {


    async getSearchInfo({commit},params={}){
        let results = await reqGetSearchInfo(params);
        if(results.code===200){

            commit("GERSEARCHINFO",results.data)
        }

    }
};
const mutations = {


    GERSEARCHINFO(state,searchlist){
        searchlist.goodsList= searchlist.goodsList.filter((cur)=>{
            return cur.defaultImg
        })
        // searchlist.goodsList.forEach((cur)=>{
        //     !cur.defaultImg&&(cur.defaultImg='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages4.10qianwan.com%2F10qianwan%2F20190608%2Fb_0_201906080345398746.jpg&refer=http%3A%2F%2Fimages4.10qianwan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663130093&t=84244862d6af9fa3e3b5ed9a5eff475d')
        // })
        state.searchlist=searchlist
    }
}
const state = {
    searchlist:{}
}
const getters = {

    goodList(state){
        return state.searchlist.goodsList || []
    },
    trademarkList(state){
        return state.searchlist.trademarkList || []
    },
    attrsList(state){
        return state.searchlist.attrsList || []
    }

}


export default{
    actions,
    mutations,
    state,
    getters


}
