import {reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister} from "@/api";
import {getToken, removeToken, setToken} from "@/utils/token";

const state = {
    code: "",
    token: getToken(),
    userInfo:{}


}
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state,userInfo){

        state.userInfo = userInfo
    },
    CLEAR(state){

        state.token =''
        state.userInfo={}
        removeToken()
    }


}
const actions = {

    async getCode({commit}, phine) {

        let res = await reqGetCode(phine)

        if (res.code === 200) {
            commit('GETCODE', res.data)
            return 'ok'


        } else {
            return Promise.reject(new Error('fail'))
        }

    },
    // eslint-disable-next-line no-unused-vars
    async userRegister({commit}, user) {

        let res = await reqUserRegister(user)
        if (res.code === 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },

    //登录业务
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        //服务器下发token，用户唯一标识符(uuid)
        //将来经常通过带token找服务器要用户信息进行展示
        if(result.code === 200){

            commit('USERLOGIN',result.data.token)
            setToken(result.data.token)
            return'ok'
        }else{

            return Promise.reject(new Error('fail'))
        }

    },
    async getUserInfo({commit}){
        console.log(11451)

        let res = await reqUserInfo()
        if(res.code===200){

            commit('GETUSERINFO',res.data)
            return'ok'
        }else{

            return Promise.reject(new Error('fail'))
        }
    },
    async userLogout({commit}){

        let res = await reqLogout()
        if(res.code===200){

            commit('CLEAR')
            return 'ok'
        }else{

            return Promise.reject(new Error('faile'));
        }
    }

}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,


}
