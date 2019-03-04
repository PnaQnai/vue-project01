<template>
  <div>
    <!-- 轮播图  父组件向子组件进行传值 -->
    <swiper :lunbotu="dataList" :isFull="true"></swiper>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
    <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/newlist"><a href="">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></a>
    </router-link>
    <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/photolist"><a href="#">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></a></router-link>
    <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/goodsbuy"><a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></router-link>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
           <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>
</ul>
  </div>
</template>

<script>

//导入toast组件
import { Toast } from 'mint-ui';

//导入轮播图组件
import swiper from '../subcomponents/swiper.vue'

//导出数据
export default {
    data(){
        return {
            dataList:[] //用于接收从后来请求过来的数据
        }
    },
    created() {
        this.getData()
    },
    methods:{
        getData(){
            //此处不加/
            this.$http.get('api/getlunbo').then(res=>{
                // console.log(res.body);
                if(res.body.status === 0){
                    //成功了
                    this.dataList = res.body.message;
                }else{
                    //失败了  提示信息
                    Toast('轮播图获取图片失败!!');
                }
            })
        }
    },
    components:{
        swiper
    },
    
};
</script>

<style lang="less" scoped>
.mui-table-view,.mui-grid-view,.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        width: 60px;
    }
    .mui-table-view-cell{
        border: none;
        font-size: 13px;
    }
}
</style>
