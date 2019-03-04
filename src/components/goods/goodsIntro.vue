<template>
<!-- 商品图文介绍 -->
  <div class="goodsInfo-container">
    <h1>{{goodsInfoList.title}}</h1>
    <hr>
    <p class="goodsContainer" v-html="goodsInfoList.content"></p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            goodsInfoList:[]  //用于存储当前页面的数据
        }
    },
    created(){
        this.displayGoodsInfo()
    },
    methods:{
        //展示商品详情信息
        displayGoodsInfo(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(res=>{
                console.log(res.body);
                
                if(res.body.status === 0){
                    this.goodsInfoList = res.body.message[0];
                }
            })
        }
    }
}
</script>

<style lang="less">
.goodsInfo-container{
    padding: 0 5px;
    h1{
        font-size: 14px;
        text-align: center;
        color: rgb(10, 125, 219);
        line-height: 30px;
    }

    img{
        width: 100%;
        // height: 100%;
    }

}
</style>
