<template>
  <div class="news-container">
      <!-- 头部 -->
    <div class="news-header">
      <h1>{{newsDital.title}}</h1>
      <p>
        <span>发表时间:{{newsDital.add_time | momentime('YYYY-MM-DD HH:mm:ss')}}</span>
        <span>点击：{{newsDital.click}}次</span>
      </p>
      <hr>
      <div class="news-content" v-html="newsDital.content"></div>
    </div>

    <!-- 评论组件 因为多个地方都有评论 所以把评论做成全局组件  因为子组件需要用到文章id  所以父向子传值-->
    <news-comment :id="this.id"></news-comment>
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
          this.newsDital = res.body.message[0];
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
