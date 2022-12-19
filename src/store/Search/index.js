//search当中的三连环
import { reqGetSearchInfo } from "@/api";
const state = {
    searchList:{}
};
const mutations ={
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    //获取search中的数据
    async getSearchInfo({commit},params={}){
       let result = await reqGetSearchInfo(params);
       if(result.code == 200){
        commit('GETSEARCHINFO',result.data)
       }
    }
};
//计算属性
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList ||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList ||[];
    }
};
export default {
    mutations,
    getters,
    actions,
    state,
}