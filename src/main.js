import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import less from 'less'
import ElementUI from 'element-ui';
import * as echarts from 'echarts'
import drag from './views/DragImage';

import './assets/utils/rem.js';
import 'lib-flexible/flexible.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/mainCss.css'
import './assets/css/compCss.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(less)


// 全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/Login' || to.path == '/College'){
//     next('/College');
//   }else{
//     alert('您还没有登录，请先登录');
//     next('/Login');
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
