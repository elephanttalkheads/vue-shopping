import Detail from "@/pages/Detail";

import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import addCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import trade from "@/pages/Trade";
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess";
import Center from"@/pages/Center"
import myOrder from "@/pages/Center/myOrder";
import groupOrder from "@/pages/Center/groupOrder";

export  default[
    {
        path:'/center',
        name:'center',
        meta: {show: false},
        component:Center,
        children:[
            {
                path:'myorder',
                component:myOrder,

            },
            {
                path:'groupOrder',
                component:groupOrder,

            },
            {path:'',
                redirect:'myorder'

            }


        ]


    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta: {show: true},
        beforeEnter(to, from, next) {
            if(from.path==='/pay'){
                next()
            }else{

                next('/pay')
            }
        }

    },
    {
        path:'/pay',

        component: Pay,
        meta: {show: true},
        props: route => ({orderId:route.query.orderId}),
        beforeEnter (to, from, next) {
            if (from.path==='/trade') {

                next()
            } else {
                next('/trade')
            }
        }

    },


    {
        path:'/trade',
        name:'trade',
        component:trade,
        meta: {show: true},
        beforeEnter(to, from, next) {


            if (from.path === '/shopcar') {

                next();
            } else {
                next('/shopcar')
            }
        }
    },

    {
        path: '/shopcar',
        name:'shopcar',
        component: ShopCart,
        meta: {show:true}

    },

    {

        path:'/detail/:skuid',
        name:'detail',
        component:Detail,
        meta:{show:true}


    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/pages/Home'),
        meta:{show:true}

    },
    {


        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        name:'search',

    },
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {

        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {path: "/addcartsuccess",
        name:'addcartsuccess',
    component:addCartSuccess,
    meta: {show:true},

    },
    //路由重定向
    {
        path:'*',
        redirect:'/home'


    }




]
