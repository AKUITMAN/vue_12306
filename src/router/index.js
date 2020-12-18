import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registry from "@/components/registry";
import forgetPassword from "@/components/forgetPassword";
import Lunbotu from "@/components/Lunbotu";
import adminlogin from "@/components/adminlogin";
import Manage from "@/components/Manage";
import Home from "@/components/Home";
import TbUserList from "@/components/TbUserList";
import addressList from "@/components/addressList";
import trainList from "@/components/trainList";
import addOrUpdateTrain from "@/components/addOrUpdateTrain";
import order_frame from "../components/order_frame";
import Order from "../components/Order";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/registry',
      name: 'registry',
      component: registry
    },{
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },{
      path: '/Lunbotu',
      name: 'Lunbotu',
      component: Lunbotu
    }, {
      path: '/adminlogin',
      name: 'adminlogin',
      component: adminlogin
    }, {
      path: '/Manage',
      name: 'Manage',
      component: Manage,
      children:[
        {
          path: '',
          component: Home,
          meta: [],
        },
        {
          path: '/TbUserList',
          component: TbUserList,
          meta: ['用户管理', '用户信息'],
        },
        {
          path: '/addressList',
          component: addressList,
          meta: ['城市管理', '全部城市'],
        },
        {
          path: '/trainList',
          component: trainList,
          meta: ['列车管理', '列车信息'],
        },
        {
          path: '/addOrUpdateTrain',
          name:'addOrUpdateTrain',
          component: addOrUpdateTrain,
          meta: ['列车管理', '新增列车'],
        },
      ]
    },
    {
      path: '/order',
      component: order_frame,
      redirect: '/order_frame',
      children: [
        {
          path: '/order_frame',
          component: Order
        }
      ]
    }
  ]
})
