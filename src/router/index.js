import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import Home from "@/pages/Home";
// import Search from "@/pages/Search";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
// import Detail from "@/pages/Detail";
import routes from "@/router/routers";
import store from "@/store";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//
//
VueRouter.prototype.push = function (location, resolve, reject) {

    if (resolve && reject) {

        originPush.call(this, location, resolve, reject)


    } else {

        originPush.call(this, location, () => {
        }, () => {
        })
    }

    // console.log(13245)
}
VueRouter.prototype.replace = function (location, resolve, reject) {

    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)


    } else {
        originReplace.call(this, location, () => {
        }, () => {
        })

    }
}


//配置路由

let router = new VueRouter({


    routes,
    scrollBehavior(to, from,savedPosition) {


        if (from.name === 'home') {


            return  {
                y: 0
            }
        }else if(from.name==='search'&&to.name==='search') {
            console.log('yuandi')

        }

        else if (from.name === 'search' && to.name === 'detail') {
            return {
                y: 100
            }


        }


    }

});

router.beforeEach(async (to, from, next) => {

    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    // console.log(token,name)
    // next();
    if (token) {
        if (to.path === '/login' || to.path === '/register') {

            next('/home');
        } else {
            if (name) {

                next();
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (err) {
                    await store.dispatch('userLogout')
                    next('/login')
                }


            }


        }
    } else {
        let toPath = to.path
        if(toPath.indexOf('/trade')!==-1 || toPath.indexOf('/pay')!==-1||toPath.indexOf('/center')!==-1){
            next('/login?redirect=' + toPath)

        }else{

            next()
        }



    }


})


export default router;
