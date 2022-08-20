//二次封装axios
import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
// console.log(nprogress)


const requestsswagger =axios.create({
    baseURL:"/api-docs",
    timeout:5000,


})

//请求拦截器
requestsswagger.interceptors.request.use((config)=>{
    nprogress.start();
    return config
})

//响应拦截器
requestsswagger.interceptors.response.use((res)=>{

    nprogress.done();
    return res.data


},()=>{
    return Promise.reject(new Error('false'))



})




//对外暴露
export default requestsswagger