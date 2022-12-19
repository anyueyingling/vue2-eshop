import Vue from "vue"
import Vuex from"vuex"
//使用插件
Vue.use(Vuex);
import home from "./Home"
import search from "./Search"
import detail from './Detail'
import shopcart from "./Shopcart"
import user from './User'
import trade from "./Trade"
//对外暴露store的一个实例
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade,
    }
});