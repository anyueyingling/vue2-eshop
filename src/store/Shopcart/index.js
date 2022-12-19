import { reqCartList ,reqDeleteCartById,reqUpdateIscheckedById} from "@/api";
const state = {
    cartList:[]
};
const mutations ={
    GETCARTLIST(state,cartList){
        state.cartList = cartList;
    }
};
const actions ={
    async getCartList({commit}){
       let result = await reqCartList();
       if(result.code ==200){
        commit('GETCARTLIST',result.data);
       }
    },
    //删除购物车某一个产品
    async deleteCartListBySkuId({commit},skuId){
     let result =  await reqDeleteCartById(skuId);
        if(result.code ==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //切换商品选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
     let result = await reqUpdateIscheckedById(skuId,isChecked);
     if(result.code ==200){
        return 'ok';
     }else{
        return Promise.reject(new Error('faile'));
     }
    },
    //删除所有选中的产品
    deleteAllCheckedCartList({dispatch,getters}){
        //console.log(getters);
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked ==1? dispatch('deleteCartListBySkuId',item.skuId):'';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    //修改全部产品的状态
    updateAllCartIsChecked({state,dispatch},isChecked){
        let PromiseAll = [];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    }
};
const getters ={
    cartList(state){
        return state.cartList[0]||{};
    },
    cartInfoList(state){
        return state.ca
    }
};
export default {
    state,
    mutations,
    actions,
    getters,
};