//二次封装axios
import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
import store from "@/store";
 // console.log(nprogress)


const requests =axios.create({
    baseURL:"/api",
    timeout:5000,


})

//请求拦截器
requests.interceptors.request.use((config)=>{

    if(store.state.detail.uuid_token){

        config.headers.userTempId = store.state.detail.uuid_token;
    }

    if(store.state.user.token){

        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{

    nprogress.done();
    return res.data


},()=>{
    return Promise.reject(new Error('false'))



})




//对外暴露
export default requests
