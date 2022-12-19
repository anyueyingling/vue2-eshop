import Mock from "mockjs";
import banners from "./banners.json";
import floors from "./floors.json";
//mock第一个参数是请求地址，第二个参数是请求数据
Mock.mock("/mock/banners",{code:200,data:banners});
Mock.mock("/mock/floors",{code:200,data:floors});