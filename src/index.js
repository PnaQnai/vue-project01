//导入vue包
import Vue from 'vue'

// //导入vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import MintUI from 'mint-ui'
Vue.use(MintUI)

// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state: { // this.$store.state.***
    car: car // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子   
    // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
  },
  mutations: { // this.$store.commit('方法的名称', '按需传递唯一的参数')
    addToCar(state, goodsinfo) {
      // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
       
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }

      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中商品的数量值
      // 分析： 
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar(state, id) {
      // 根据Id，从store 中的购物车中删除对应的那条商品数据
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true;
        }
      })
      // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: { // this.$store.getters.***
    // 相当于 计算属性，也相当于 filters
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

//导入vue-resour包
import VueResource from 'vue-resource'
Vue.use(VueResource)

//定义全局的url根地址
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
//配置post请求头方式
Vue.http.options.emulateJSON = true;

// 使用axios   可以使用
// import axios from 'axios'
// axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 重命名
// Vue.prototype.$http = axios


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
// import { Header,Swipe, SwipeItem,Lazyload } from 'mint-ui';

import 'mint-ui/lib/style.css'
//轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
//懒加载
// Vue.use(Lazyload);



import router from './router.js'

// Vue.component(Header.name, Header);

//导入缩略图包
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm = new Vue({
    el:'#app',
    render:ap=>ap(app),
    router,
    store
})