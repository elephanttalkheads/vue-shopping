import {reqCategoryList, reqFloorList, reqGetBannerList} from "@/api";

const actions = {
    async categoryList({commit}) {


        let result = await reqCategoryList();
        if (result.code === 200) {

            commit("CATEGORYLIST", result.data)
        }


        // let result = reqCategoryList();
        // result.then(rel=>{
        //
        //    console.log(rel)
        // },rej=>{
        //     console.log(rej)
        // })
    },

    async getBannerList({commit}) {

        let result = await reqGetBannerList();
        if (result.code === 200){
            commit('GETBANNERLIST',result.data)
        }


            } ,
    async getFloorList({commit}){
        let result =await reqFloorList();
        if (result.code ===200){
            commit('GETFLOORLIST',result.data)

        }
    }
};
const mutations = {

    CATEGORYLIST(state, categoryList) {

        state.categoryList = categoryList


    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;

    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList;


    }

}
const state = {
    categoryList: [],
    bannerList:[],
    floorList:[]
}
const getters = {}


export default {
    actions,
    mutations,
    state,
    getters


}