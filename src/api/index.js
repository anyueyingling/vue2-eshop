//接口统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
//三级分类接口
///api/product/getBaseCategoryList get 无参数
//暴露函数，只要外部调用这个函数，便可向服务器发送ajax请求,获取三级菜单数据
export const reqCategoryList = ()=>requests.get("/product/getBaseCategoryList");
//暴露轮播图接口,只要外部调用这个函数，便可向mock获取数据
export const reqBannerList = ()=>mockRequests.get("/banners");
//floor接口
export const reqFloorList = ()=>mockRequests.get("/floors");
//搜索数据接口
//地址：/api/list，请求方式：post 参数：可有
/*{
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
  }*/
//暴露search模快接口，params为输入的参数。
export const reqGetSearchInfo = (params)=>requests({
    url:"/list",
    method:"post",
    data:params,
})
//获取商品详情信息的接口
export const reqGoodsInfo = (skuId) =>requests({
  url:`/item/${skuId}`,
  method:'get',
})
//将产品信息添加到购物车中
export const reqAddOrUpdateShopCart = (skuId,skuNum) =>requests({
  url:`/cart/addToCart/${skuId}/${skuNum}`,
  method:'post',
});
//购物车拉取信息
export const reqCartList = () => requests({
  url:'/cart/cartList',
  method:'get',
});
//删除购物车产品的接口
export const reqDeleteCartById =(skuId)=>requests({
  url:`/cart/deleteCart/${skuId}`,
  method:'delete',
})
//修改商品选中状态
export const reqUpdateIscheckedById = (skuId,isChecked)=>requests({
  url:`/cart/checkCart/${skuId}/${isChecked}`,
  method:'get'
});
//获取验证码接口
export const reqGetCode =(phone)=>requests({
  url:`/user/passport/sendCode/${phone}`,
  method:'get'
})
//注册接口
export const reqUserRigster = (data)=>requests({
  url:'/user/passport/register',
  method:'post',
  data,
});
//登录接口
export const reqUserLogin = (data) => requests({
  url:'/user/passport/login',
  method:'post',
  data,
})
//在首页登录显示用户信息
export const reqUserInfo = () => requests({
  url:'/user/passport/auth/getUserInfo',
  method:'get',
})
//退出登录
export const reqLogout = () => requests({
  url:'/user/passport/logout',
  method:'get',
})
//用户地址栏信息
export const reqAddressInfo = () => requests({
  url:'/user/userAddress/auth/findUserAddressList',
  method:'get',
})
//获取商品清单
export const reqOrderInfo = () => requests({
  url:'/order/auth/trade',
  method:'get'
})
//提交订单接口
export const reqSubmitOrder = (tradeNo,data)=>requests({
  url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
  method:'post',
  data,
})
//获取支付信息
export const reqPayInfo = (orderId) => requests({
  url:`/payment/weixin/createNative/${orderId}`,
  method:'get'
})

//获取支付订单状态
export const reqPayStatus = (orderId) =>requests({
  url:`/payment/weixin/queryPayStatus/${orderId}`,
  method:'get'
})
//获取我的个人中心数据接口
export const reqMyOrderList = (page,limit) =>requests({
  url:`/order/auth/${page}/${limit}`,
  method:'get',
})
  



