//导入vue-router包
import VueRouter from 'vue-router'
import homeContainer from './components/homeContainer.vue'
import searchContainer from './components/searchContainer.vue'
import shopcarContainer from './components/shopcarContainer.vue'
import memberContainer from './components/memberContainer.vue'



//创建路由
var router = new VueRouter({
    routes:[
        {path:'/home',component:homeContainer},
        {path:'/search',component:searchContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/member',component:memberContainer},
    ],
    linkActiveClass:'mui-active'
})

export default router