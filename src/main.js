import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
//注册全局组件
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination";
import { MessageBox } from 'element-ui';
//引入swiper样式
import "swiper/css/swiper.min.css";
Vue.component(TypeNav.name,TypeNav);
Vue.component(Pagination.name,Pagination);
//ElementUI注册时可挂载在原型上。
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
/* import {reqCategoryList} from "./api";
reqCategoryList(); */
//引入仓库
import store from "@/store";
import "@/mock/mockServe";

Vue.config.productionTip = false
//统一接口文件夹中的全部请求函数
import * as API from '@/api'

//引入插件
//import VueLazyload from 'vue-lazyload'
//import zuoc from '@/assets/1.gif'
//注册插件
// Vue.use(VueLazyload,{
//   //懒加载默认图片
//   loading: zuoc,
// });
//引入表单校验插件

import '@/plugins/validate';
new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
