//引入axios插件
import axios from "axios";
//引入进度条插件
import nprogress from "nprogress";
import store from "@/store";
//引入进度条样式
import "nprogress/nprogress.css"
const requests = axios.create({
    //基础路径
    baseURL:"/api",
    //代表请求超时5s
    timeout:5000
});
//请求拦截器
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    //带token给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数
    nprogress.done();
    return res.data;
},(error)=>{
    //失败的回调函数
    return Promise.reject(new Error("失败"));
})



export default requests;