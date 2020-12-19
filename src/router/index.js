import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registry from "@/components/registry";
import forgetPassword from "@/components/forgetPassword";
import adminlogin from "@/components/adminlogin";
import Manage from "@/components/Manage";
import Home from "@/components/Home";
import TbUserList from "@/components/TbUserList";
import addressList from "@/components/addressList";
import trainList from "@/components/trainList";
import addOrUpdateTrain from "@/components/addOrUpdateTrain";
import AllPeopleList from "@/components/AllPeopleList";
import addAddress from "@/components/addAddress";
import OrderList from "@/components/OrderList";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
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
        {
          path: '/AllPeopleList',
          name:'AllPeopleList',
          component: AllPeopleList,
          meta: ['乘客管理', '全部乘客'],
        },
        {
          path: '/addAddress',
          name:'addAddress',
          component: addAddress,
          meta: ['城市管理', '新增城市'],
        },
        {
          path: '/OrderList',
          name:'OrderList',
          component: OrderList,
          meta: ['订单管理', '全部订单'],
        },
      ]
    },
  ]
})
