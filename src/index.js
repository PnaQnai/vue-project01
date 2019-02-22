//导入vue包
import Vue from 'vue'



//导入路由组件
import app from './app.vue'



//导入mui包
import './lib/mui/css/mui.css'

//导入头部组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

var vm = new Vue({
    el:'#app',
    render:ap=>ap(app),

})