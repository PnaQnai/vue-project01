//导入vue-router包
import VueRouter from 'vue-router'
import homeContainer from './components/tabbar/homeContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import newList from './components/news/newList.vue'
import newsDital from './components/news/newsDital.vue'


//创建路由
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/search',component:searchContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/member',component:memberContainer},
        {path:'/home/newlist',component:newList},
        {path:'/home/newsdital/:id',component:newsDital}
    ],
    linkActiveClass:'mui-active'
})

export default router