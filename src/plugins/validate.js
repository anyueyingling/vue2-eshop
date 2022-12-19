//vee-validate 表单验证区域
//引入Vue
import Vue from 'vue'
//引入插件
import VeeValidate from 'vee-validate'
//中文提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);
//表单验证
VeeValidate.Validator.localize('zh-CN',{
    messages:{
        ...zh_CN.messages,
        is:(field) =>`${field}必须与密码相同`
    },
    attributes:{
        //给校验的field属性名映射中文名称
        phone:'手机号',
        code:'验证码',
        password:'密码',
        possword1:'确认指标',
        agree:'协议'
    }
})
//自定义校验
VeeValidate.Validator.extend('agree',{
    validate: value => {
        return value
    },
    getMessage: field => field +'必须同意'
})

