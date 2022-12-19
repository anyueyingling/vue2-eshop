import { reqGetCode ,reqUserRigster ,reqUserLogin,reqUserInfo,reqLogout} from "@/api";
import { setToken ,getToken ,removeToken} from '@/utils/token';
const state={
    code:'',
    token: getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code = code;
    },
    USERLOGIN(state,token){
        state.token = token;
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    //清除仓库中的数据
    CLEAR(state){
        state.userInfo = {};
        state.token = '';
        removeToken();
    }
};
const actions ={
    //获取验证码
    async getCode({commit},phone){
       let result = await reqGetCode(phone);
       if(result.code ==200){
        commit('GETCODE',result.data);
        return 'ok';
       }else{
        return Promise.reject(new Error('faile'));
       }
    },
    //注册
    async userRigster({commit},data){
        let result = await reqUserRigster(data);
        //console.log(result);
        if(result.code ==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //用户登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        //console.log(result);
        if(result.code == 200){
            commit('USERLOGIN',result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //在首页显示用户登录信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        //console.log(result);
        if(result.code == 200){
            commit('GETUSERINFO',result.data);
            return 'ok';
        }/* else{
            return Promise.reject(new Error('faile'));
        } */
    },
    //退出登录，清除后端程序
    async userLogout({commit}){
        let result = await reqLogout();
        if(result.code == 200){
            commit('CLEAR');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
        
    }
};
const getters ={};
export default {
    state,
    mutations,
    actions,
    getters,
}