//统一管理所有接口
import requests from "@/api/request";
import mockAjax from "@/api/mockAjax";


//首页三级联动


export const reqCategoryList = () => {
    //发请求，返回promise对象

    return requests({url: '/product/getBaseCategoryList', method: 'get'})
}

export const reqGetBannerList = () => {

    return mockAjax({url: '/banner', method: 'get'})
}
export const reqFloorList = () => {

    return mockAjax({url: '/floor', method: 'get'})
}

export const reqGetSearchInfo = (params) => {
    return requests({url: '/list', method: 'post', data: params})
}

//获取产品详情分类
export const reqGooodsInfo = (id=1) => {
    return requests({url:`/item/${id}`,method:'get'})



}

export const reqAddUpdateShopCart = (skuId,skuNum)=>{

    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post',})


}

export const  reqCartList =()=>{

    return requests({url:'/cart/cartList',method:'get'})
}


export const reqDeleteCartById =(skuId)=>{

    return requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})


}

export const reqUpdateCheckedByid=(skuId,isChecked)=>{
    return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}

export const reqGetCode =(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册
export const reqUserRegister =(data) => requests({url:'/user/passport/register',data,method:'post'})
//登录
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});
//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=> requests({url:'/user/passport/logout',method:'get'});
//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});


//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post

export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export  const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});


//获取个人中心的数据
//api/order/auth/{page}/{limit}  get
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});
