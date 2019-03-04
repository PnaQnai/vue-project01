<template>
  <div class="news-comments">
    <h1>发表评论</h1>
    <hr>
    <textarea placeholder="请输入评论内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>
    <button @click="submComment">发表评论</button>
    <div class="commentList" v-for="(item,index) in newsComment" :key="item.id">
      <div
        class="commentHeader"
      >第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | momentime('YYYY-MM-DD HH:mm:ss')}}</div>
      <div class="commentContent" v-html="item.content"></div>
    </div>
    <button class="loadMore" @click="getMore">加载更多</button>
  </div>
</template>

<script>
//导入toast组件
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      newsComment: [],  //用于存储从后台获取的评论内容
      pageindex:1,  //默认在第一页
      msg:''
    };
  },
  created() {
    this.displayComment();
  },
  methods: {
    //展示评论内容
    displayComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex="+this.pageindex)
        .then(res => {
          // console.log(res.body);
          if (res.body.status === 0) {
            this.newsComment = this.newsComment.concat(res.body.message);
          } else {
            //失败了  提示信息
            Toast('评论列表获取失败！！！');
          }
        });
    },
    //获取更多
    getMore(){
      //页数增加
        this.pageindex ++;
        this.displayComment();
    },
    //提交评论
    submComment(){
        //未完成
        // console.log(this.id)
        // console.log(this.content);
        //评论内容验证
        if(this.msg.trim() === ""){
          Toast('请输入合法的评论内容！');
          return 
        }
        
        this.$http.post('api/postcomment/'+this.id,{content:this.msg}).then(res=>{
          // console.log(res.body.status)
            if(res.body.status === 0){
              //自定义数组内容 插入到数组的最前端
              // this.displayComment();
              var cmt = {
                user_name:'匿名用户',
                add_time:new Date(),
                content:this.msg
              }
              // console.log(this);
              //  this.displayComment();
              //v-for会自动监听数组的变化
              this.newsComment.unshift(cmt);
              this.msg = '';
            }else{
              Toast('评论失败！！！');
            }
        })
    }
  },
  props:['id']
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
