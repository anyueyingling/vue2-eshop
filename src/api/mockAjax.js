//引入axios插件
import axios from "axios";
//引入进度条插件
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
const requests = axios.create({
    //基础路径
    baseURL:"/mock",
    //代表请求超时5s
    timeout:5000
});
//请求拦截器
requests.interceptors.request.use((config)=>{
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