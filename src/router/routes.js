//引入路由组件
//import Home from "@/pages/Home"
//import Search from "@/pages/Search"
//import Login from "@/pages/Login"
//import Register from "@/pages/Register"
//import Detail from "@/pages/Detail"
//import AddCartSuccess from '@/pages/AddCartSuccess'
//import ShopCart from '@/pages/ShopCart'
//import Trade from '@/pages/Trade'
//import Pay from "@/pages/Pay"
//import PaySuccess from '@/pages/PaySuccess'
//import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'
export default [
    {
        path:"/home",
        component:()=>import('@/pages/Home'),
        meta:{show:true}
    },
    //详情路由
    {
        path:"/detail/:skuId",
        component:()=>import('@/pages/Detail'),
        meta:{show:true}
    },
    {
        path:"/search/:keyword?",
        component:()=>import('@/pages/Search'),
        meta:{show:true},
        name:"search"
    },
    {
        path:"/login",
        component:()=>import('@/pages/Login'),
        meta:{show:false}
    },
    {
        path:"/register",
        component:()=>import ('@/pages/Register'),
        meta:{show:false}
    },
    //重定向,默认条件下显示首页
    {
        path:"*",
        redirect:"/home"
    },
    {
        path:"/addcartsuccess",
        name:'addcartsuccess',
        component:()=>import('@/pages/AddCartSuccess'),
        meta:{show:true}
    },
    {
        path:"/shopcart",
        //name:'addcartsuccess',
        component:()=>import('@/pages/ShopCart'),
        meta:{show:true}
    },
    {
        path:"/trade",
        //name:'addcartsuccess',
        component:()=>import('@/pages/Trade'),
        meta:{show:true},
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path =='/shopcart'||from.path =='/'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path:"/pay",
        //name:'addcartsuccess',
        component:()=>import('@/pages/Pay'),
        meta:{show:true},
        beforeEnter:(to, from, next)=>{
            if(from.path =='/trade' ||from.path =='/'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path:"/paysuccess",
        //name:'addcartsuccess',
        component:()=>import('@/pages/PaySuccess'),
        meta:{show:true}
    },
    {
        path:"/center",
        //name:'addcartsuccess',
        component:()=>import('@/pages/Center'),
        meta:{show:true},
        //二级路由组件
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder,
            },
            //路由重定向
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
] 