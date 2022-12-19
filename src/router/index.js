//引入插件
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
import routes from './routes';
//引入store
import store from '@/store';
//备份push原方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push方法
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve || reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
//重写replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve || reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}
//配置路由
let router =  new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { x: 0 ,y :0 }
    },
})
//全局守卫，前置守卫
router.beforeEach((to,from,next)=>{
    // next();
    // 用户登录了，才会有token
    let token = store.state.user.token;
    if(token){
        // 如果已经登录了，就不要返回登录页面了
        if(to.path =='/login'){
            next('/home');
        }else{
            next();
        }    
    }else{
        //没登录，不能去交易相关，不能去支付相关【pay/paysuccess】,不能去个人中心
        let toPath = to.path;
        if( toPath=='/trade' || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            //把未登录前没有去成的信息保存在地址栏中，
            next('/login?redirect='+ toPath);
        }else{
            next();
        }
    }   
})
export default router;