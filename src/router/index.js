import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/common.css?v=1'
import '../assets/styles/swiper.css'

import Login from '@/pages/login/login'
import Login_lostpassword from '@/pages/login/login_lostpassword'
import Login_rest from '@/pages/login/login_rest'
import Home from '@/pages/public/home'
import Index from '@/pages/home/index'
//公共组件
import PageModule from '@/pages/public/page'
import SwiperModule from '@/pages/public/swiper'
//裸钻库存
import InventoryIndex from '@/pages/home/inventory/index'
import InventoryList from '@/pages/home/inventory/list'
//产品中心
import ProductIndex from '@/pages/home/product/index'
import Productlist from '@/pages/home/product/list'
import Productdetails from '@/pages/home/product/details'
//普通定制
import CommoncustomIndex from '@/pages/home/commoncustom/index'
import CommoncustomHome from '@/pages/home/commoncustom/home'
import CommoncustomOrder from '@/pages/home/commoncustom/order'
import Commoncustomdetails from '@/pages/home/commoncustom/orderdetails'
//深度定制
import DepthcustomIndex from '@/pages/home/depthcustom/index'
import DepthcustomHome from '@/pages/home/depthcustom/home'
import DepthcustomOrderdetails from '@/pages/home/depthcustom/orderdetails'
//订单
import OrderlistIndex from '@/pages/home/orderlist/index'
import OrderlistHome from '@/pages/home/orderlist/home'
import OrderlistShop from '@/pages/home/orderlist/shop'
import OrderlistCommoncustom from '@/pages/home/orderlist/commoncustom'
import OrderlistDepthcustom from '@/pages/home/orderlist/depthcustom'
//用户管理
import UserlistIndex from '@/pages/home/user/index'
import UserlistHome from '@/pages/home/user/home'
//收藏
import Collect from '@/pages/home/collect'
//购物车
import Shopcar from '@/pages/home/shopcar'
//设置
import Setting from '@/pages/home/setting'
//修改密码
import Changepassword from '@/pages/home/changepassword'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Router.prototype.goBack = function () {
  this.isBack = true
}

Vue.use(Router)
Vue.component('Pagemodule', PageModule)
Vue.component('Swipermodule', SwiperModule)
export default new Router({
  // mode: 'history',
  hashbang: true,
  // base: '',
  routes: [
    {path: '/', component: Home, name: 'Home', redirect: '/index'},

    //登陆模块
    {path: '/login', component: Login, name: 'Login'},
    //忘记密码
    {path: '/login_lostpassword', component: Login_lostpassword, name: 'Login_lostpassword'},
    //设置新密码
    {path: '/login_rest', component: Login_rest, name: 'Login_rest'},

    //登陆成功后
    {
      path: '/',
      component: Home,
      children: [
        //首页
        {path: 'index', query: {tab: 1}, component: Index, name: 'Index'},
        //产品中心
        {
          path: 'product',
          component: ProductIndex,
          name: '',
          children: [
            //戒托列表
            {path: '/', component: Productlist, name: 'Productlist'},
            //戒托详情
            {path: 'details', component: Productdetails, name: 'Productdetails'}
          ]
        },

        //裸钻库存
        {
          path: 'inventory',
          component: InventoryIndex,
          name: '',
          children: [
            //裸钻库存列表
            {path: '/', component: InventoryList, name: 'InventoryList'}
          ]
        },

        //普通定制
        {
          path: 'commoncustom',
          component: CommoncustomIndex,
          name: '',
          children: [
            //普通定制首页
            {path: '/', component: CommoncustomHome, name: 'CommoncustomHome'},
            //普通定制确认订单
            {path: 'order', component: CommoncustomOrder, name: 'CommoncustomOrder'},
            //普通定制确认订单详情
            {path: 'orderdetails', component: Commoncustomdetails, name: 'Commoncustomdetails'}
          ]
        },

        //深度定制
        {
          path: 'depthcustom',
          component: DepthcustomIndex,
          name: '',
          children: [
            //深度定制首页
            {path: '/', component: DepthcustomHome, name: 'DepthcustomHome'},
            //深度定制详情
            {path: 'orderdetails', component: DepthcustomOrderdetails, name: 'DepthcustomOrderdetails'}
          ]
        },
        //订单
        {
          path: 'orderlist',
          component: OrderlistIndex,
          name: '',
          children: [
            //订单列表首页

            {path: '/', component: OrderlistHome, name: 'OrderlistHome'},
            //购买订单详情
            {path: 'shop', component: OrderlistShop, name: 'OrderlistShop'},
            //普通定制订单详情
            {path: 'commoncustom', component: OrderlistCommoncustom, name: 'OrderlistCommoncustom'},
            //深度定制订单详情
            {path: 'depthcustom', component: OrderlistDepthcustom, name: 'OrderlistDepthcustom'},
          ]
        },
        //用户管理
        {
          path: '/',
          component: UserlistIndex,
          name: '',
          children: [
            //订单列表首页
            {path: 'userlist', component: UserlistHome, name: 'UserlistHome'},
          ]
        },
        //收藏
        {path: 'collect', component: Collect, name: 'Collect'},
        //购物车
        {path: 'shopcar', component: Shopcar, name: 'Shopcar'},
        //设置
        {path: 'setting', component: Setting, name: 'Setting'},
        //修改密码
        {path: 'changepassword', component: Changepassword, name: 'Changepassword'},
      ]
    }
  ]
})
