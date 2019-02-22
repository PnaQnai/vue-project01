<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in dataList" :key="item.url">
          <!-- 只有v-bind才区分字符串和变量 -->
          <img :src="item.img" alt="">
      </mt-swipe-item>

    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
           <img src="../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>
</ul>
  </div>
</template>

<script>
import Vue from 'vue';
//导入vue-resour包
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入toast组件
import { Toast } from 'mint-ui';

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
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
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
    }
};
</script>

<style lang="less" scoped>
//轮播图样式
.mint-swipe{
    height: 260px;
    img{
        width: 100%;
        height: 260px;
    }
}

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
