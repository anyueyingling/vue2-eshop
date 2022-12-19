//调用封装的reqCategoryList
import { reqCategoryList , reqBannerList ,reqFloorList} from "@/api";

const state = {
    //state默认初始值为空数组
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations ={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERlIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({commit}){
       let result = await reqCategoryList();
       if(result.code==200){
        commit("CATEGORYLIST",result.data);
       }
    },
    async getBannerList({commit}){
        let result = await reqBannerList();
        if(result.code == 200){
            commit('GETBANNERlIST',result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code == 200){
            commit("GETFLOORLIST",result.data);
        }
    }
};
const getters = {};
export default {
    mutations,
    getters,
    actions,
    state,
}