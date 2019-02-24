<template>
  <div class="news-comments">
    <h1>发表评论</h1>
    <hr>
    <textarea placeholder="请输入评论内容(最多吐槽120字)" maxlength="120" v-model="content"></textarea>
    <button @click="submComment">发表评论</button>
    <div class="commentList" v-for="item in newsComment" :key="item.id">
      <div
        class="commentHeader"
      >第1楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | momentime('YYYY-MM-DD HH:mm:ss')}}</div>
      <div class="commentContent" v-html="item.content"></div>
    </div>
    <button class="loadMore">加载更多</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsComment: [],
      id: this.$route.params.id,
      content:content
    };
  },
  created() {
    this.displayComment();
  },
  methods: {
    displayComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=1")
        .then(res => {
          console.log(res.body);
          if (res.body.status === 0) {
            this.newsComment = res.body.message;
          } else {
          }
        });
    },
    submComment(){
        //未完成
        console.log(this.newsComment)
        console.log(this.content);
        
        this.$http.post('api/postcomment/'+this.id,{artid:this.id,content:this.content}).then(res=>{
            console.log(res.body);
        })
    }
  }
};
</script>

<style lang="less" scoped>
.news-comments {
  h1 {
    font-size: 19px;
  }
  textarea {
    height: 80px;
  }
  button {
    width: 100%;
    background-color: #26a2ff;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  .commentList {
    font-weight: 600;
    margin-top: 5px;
    .commentHeader {
      background-color: #ccc;
      font-size: 13px;
      line-height: 30px;
    }
    .commentContent {
      font-size: 12px;
      line-height: 40px;
      text-indent: 2em;
    }
  }
  .loadMore {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
    color: rgb(226, 141, 141);
    border: 2px solid #F7B4B4;
    background-color: #fff;
  }
}
</style>
