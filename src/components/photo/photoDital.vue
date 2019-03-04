<template>
  <div class="photodital-container">
    <div class="photodital-header">
      <h1>{{photoDitalList.title}}</h1>
      <p>
        <span>发表时间:{{photoDitalList.add_time | momentime('YYYY-MM-DD HH:mm:ss')}}</span>
        <span>点击：{{photoDitalList.click}}次</span>
      </p>
      <hr>
      <!-- 缩略图 -->
      <vue-preview :slides="photoList" class="photo-img"></vue-preview>
      <!-- 文章内容 -->
      <div class="photodital-content" v-html="photoDitalList.content"></div>
    </div>

    <!-- 使用评论子组件 -->
    <commentlist :id="id"></commentlist>
  </div>
</template>

<script>
//导入评论
import commentlist from "../subcomponents/newsComment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoDitalList: [], //用于存储从后台获取的图文详情
      photoList: [] //用于存储缩略图数据
    };
  },
  created() {
    //展示文章详情
    this.displayPhotoDital();
    //展示缩略图
    this.displayPic();
  },
  methods: {
    //展示文章详情
    displayPhotoDital() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        // console.log(res.body);
        if (res.body.status === 0) {
          this.photoDitalList = res.body.message[0];
        } else {
          //失败了
        }
      });
    },
    //展示缩略图
    displayPic() {
      // console.log(this.id)
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        console.log(res.body);
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            (item.w = 600),
              (item.h = 400),
              //设置小图片的路径 大图片路径跟小图片路径一致
              (item.msrc = item.src);
          });
          this.photoList = res.body.message;
        }
      });
    }
  },
  components: {
    commentlist
  }
};
</script>

<style lang="less">
.photodital-container {
  padding: 0 5px;
  .photodital-header {
    h1 {
      font-size: 15px;
      color: #3aaaff;
      text-align: center;
      line-height: 35px;
    }
    p {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        color: rgb(156, 153, 153);
      }
    }
    .photo-img {
      .my-gallery {
        display: flex;
        flex-wrap: wrap;
        figure {
          margin: 10px;
          box-shadow: 0 0 10px #999;
          img {
            width: 100px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
