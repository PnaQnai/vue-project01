<template>
  <div class="news-container">
      <!-- 头部 -->
    <div class="news-header" v-for="item in newsDital" :key="item.id">
      <h1>{{item.title}}</h1>
      <p>
        <span>发表时间:{{item.add_time | momentime('YYYY-MM-DD HH:mm:ss')}}</span>
        <span>点击：{{item.click}}次</span>
      </p>
      <hr>
      <div class="news-content" v-html="item.content"></div>
    </div>

    <!-- 评论组件 因为多个地方都有评论 所以把评论做成全局组件-->
    <news-comment></news-comment>
  </div>
</template>

<script>
//导入toast组件
import { Toast } from "mint-ui";

import newsComment from '../subcomponents/newsComment.vue'
export default {
  data() {
    return {
      newsDital: [], //用于存储从后台获取到的数据
      id: this.$route.params.id //用于拼接字符串
    };
  },
  created() {
    this.displayNews();
  },
  methods: {
    displayNews() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        if (res.body.status === 0) {
          //成功了
        //   console.log(res.body);
          this.newsDital = res.body.message;
        } else {
          //失败了  提示信息
          Toast("新闻详情内容获取失败!!");
        }
      });
    }
  },
  components:{
      newsComment
  }
};
</script>

<style lang="less" scoped>
.news-container {
  padding: 0 5px;
  .news-header {
    h1 {
      font-size: 15px;
      color: red;
      text-align: center;
      line-height: 35px;
    }
    p {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        color: rgb(12, 142, 202);
      }
    }
  }
}
</style>
