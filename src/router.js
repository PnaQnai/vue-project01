//导入vue-router包
import VueRouter from 'vue-router'
import homeContainer from './components/tabbar/homeContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import newList from './components/news/newList.vue'
import newsDital from './components/news/newsDital.vue'
import photoList from './components/photo/photoList.vue'
import photoDital from './components/photo/photoDital.vue'
import goodBuy from './components/goods/goodsBuy.vue'
import goodsDital from './components/goods/GoodsInfo.vue'
import goodsPicIntro from './components/goods/goodsIntro.vue'
import goodsComment from './components/goods/goodsComment.vue'


//创建路由
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/search',component:searchContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/member',component:memberContainer},
        {path:'/home/newlist',component:newList},
        {path:'/home/newsdital/:id',component:newsDital},
        {path:'/home/photolist',component:photoList},
        {path:'/home/photolist/:id',component:photoDital},
        {path:'/home/goodsbuy',component:goodBuy},
        {path:'/home/goodsbuy/:id',component:goodsDital,name:'goodsdital'},
        {path:'/home/goodsbuy/goodspicintro/:id',component:goodsPicIntro,name:'goodspicintro'},
        {path:'/home/goodsbuy/goodscomment/:id',component:goodsComment,name:'goodscomment'}
    ],
    linkActiveClass:'mui-active'
})

export default router