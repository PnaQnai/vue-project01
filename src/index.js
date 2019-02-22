//导入vue包
import Vue from 'vue'

// //导入vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)



//导入路由组件
import app from './app.vue'



//导入mui包
import './lib/mui/css/mui.css'
//导入mui扩展样式包
import './lib/mui/css/icons-extra.css';

//导入头部组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
//轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

Vue.component(Header.name, Header);

var vm = new Vue({
    el:'#app',
    render:ap=>ap(app),
    router
})