<template>
    <div class="goods-container">
        <div class="goodslist" v-for="item in goodList" :key="item.id" @click="goUrl(item.id)">
            <div class="goodsheader">
                <img :src="item.img_url" alt="">
                <h1>{{item.title}}</h1>
            </div>
            <div class="goodscontent">
                <p class="goods-price">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="goods-hot">
                    <span class="hot">热卖中</span>
                    <span class="sheng">剩{{item.stock_quantity}}}件</span>
                </p>
            </div>
        </div>
        <input type="button" value="加载更多" class="goodsGetMore" @click="goodsGetMore">
        <!-- 获取更多按钮如何隐藏？？？？ -->
       
    </div>
</template>

<script>

export default {
    data(){
        return {
            pageindex:1,  //文章页数
            goodList:[]   //商品列表
        }
    },
    created(){
        this.displayGoodsList()
    },
    methods:{
        // 展示商品
        displayGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res=>{
                console.log(res.body.status)
                if(res.body.status === 0){
                    this.goodList = this.goodList.concat(res.body.message);
                }   
            })
            console.log(this)
        },
        //加载更多
        goodsGetMore(){
            this.pageindex++;
            this.displayGoodsList()
        },
        //链式路由
        goUrl(id){
            this.$router.push({name:'goodsdital',params:{ id: id }})
        }
    }
}
</script>

<style lang="less" scoped>
.goods-container{
    padding: 0 5px;
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    //强制换行
    flex-wrap: wrap;
    .goodslist{
        position: relative;
        // padding: 0 5px;
        margin-top: 5px;
        height: 350px;
        width: 49%;
        // border: 1px solid #000;
        box-shadow: 0 0 10px rgb(163, 161, 161);
        .goodsheader{
            h1{
                font-size: 16px;
            }
            img{
                width: 100%;
                height: 215px;
            }
        }
        .goodscontent{
            position: absolute;
            bottom: 0;
            background-color: rgb(201, 196, 196);
            width: 100%;
            height: 50px;
            padding: 0 5px;
            p.goods-price{
                margin: 3px 0;
                font-size: 13px;
                .new{
                    color:red;
                    font-size: 14px;
                }
                .old{
                    margin-left: 5px;
                    text-decoration: line-through;
                }
            }
            p.goods-hot{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                span{
                    
                }
            }
        }
    }
    .goodsGetMore{
        margin-top: 5px;;
        width: 100%;
        background-color: rgb(206, 27, 27);
        color: #fff;
        height: 50px;
        font-size: 20px;
    }
}

</style>
