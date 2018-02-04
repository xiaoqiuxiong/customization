// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import util from './util'
import VueFileUpload from 'vue-file-upload'
import crypto from 'crypto'
import { Loading } from 'element-ui'
import { Message } from 'element-ui'
import SIdentify from './identify'
import store from './store'

Vue.config.productionTip = false
Vue.use(SIdentify)
Vue.use(Vuex)


Vue.use(VueFileUpload)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(util)
Vue.config.debug = true// 开启vue 调试功能

Vue.config.productionTip = false
/*设置网页横竖屏*/
window.onload = function () {
 if (window.orientation === 180 || window.orientation === 0) {
   document.getElementById('app').style.display = "none"
   Message({
     message: '温馨提示，请在横屏状态下使用',
     type: 'warning',
     duration:0,
     customClass:'jiance'
   });
 }
 if (window.orientation === 90 || window.orientation === -90) {
   Message.closeAll()
   document.getElementById('app').style.display = "block "
 }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
 if (window.orientation === 180 || window.orientation === 0) {
   document.getElementById('app').style.display = "none"
   Message({
     message: '温馨提示，请在横屏状态下使用',
     type: 'warning',
     duration:0,
     customClass:'jiance'
   });
 }
 if (window.orientation === 90 || window.orientation === -90) {
   Message.closeAll()
   document.getElementById('app').style.display = "block "
 }
}, false);

/*请求拦截器*/
// /******************拦截器设置请参考这部分(开始)******************/
// Vue.http.interceptors.push((request, next) =>{ 
//  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值 
//  let TOKEN=sessionStorage.getItem('STORAGE_TOKEN'); 
//  if(TOKEN){ 
//   //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行 
//   request.headers.set('TOKEN',TOKEN); 
//  } 
//  next((response) => { 
//   return response; 
//  }); 
// }); 
// /******************拦截器设置请参考这部分(结束)******************/
// //拦截器 
//         Vue.http.interceptors.push((request, next) => { 
// //         console.log(Login.item); 
//           var tokens = localStorage.getItem('token'); 
//           request.headers.set('Authorization', tokens); 
// //         console.log(request.headers); 
//           help.showLoading = true; 

//           next((response) => { 
// //           console.log(response); 
//             help.showLoading = false; 
//             return response 
//           }) 
//         }) 

Vue.http.interceptors.push((request, next) => {

  /*启动加载动画*/
  let loadingInstance = Loading.service();
  next((response) => {
  
    /*接口监测*/
    if (response.body.error_code == '90009' || response.body.error_code == '90005' || response.body.error_code == '90003') {
      // 登录
      if(window.location.hash == '#/login'){
      }else{
        router.push({name: 'Login'});
      }
    }else if(response.body.error_code == '90006'){
     Message({
      message: '请求参数错误'
    });
   }else if(response.body.error_code == '90007'){
     Message({
      message: '请求参数缺失'
    });
   }else if(response.body.error_code == '90008'){
     Message({
      message: '操作失败！'
    });
   }
   /*关闭加载动画*/
   loadingInstance.close();
   /*判断请求是否成功，请求失败则显示'请求失败，请重新请求*/

   if (response.status != 200) {
    Message({
      message: '网络故障，请尝试刷新',
      type: 'warning',
      duration: 3000,
      customClass: 'jiance'
    });
    return false;
  };
});
});

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,//使用store
  template: '<App/>',
  components: {App}
}).$mount('#app')


