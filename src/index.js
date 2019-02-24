//导入vue包
import Vue from 'vue'

// //导入vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入vue-resour包
import VueResource from 'vue-resource'
Vue.use(VueResource)

//定义全局的url根地址
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
//配置post请求头方式
Vue.http.options.emulateJSON = true;

//导入日期格式化包moment
import moment from 'moment'
Vue.filter('momentime',function(data,pattern){
    //必须return
    return moment(data).format(pattern)
})


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