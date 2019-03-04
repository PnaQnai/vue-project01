<template>
  <div class="photo-container">
    <!-- 顶部滑动导航条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id===0?'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            v-for="item in catelist"
            :key="item.id"
            @click="getPhotoList(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图文列表 -->
    <div class="photoList">
      <div class="contanier">
        <ul>
          <router-link tag="li" v-for="item in photolist" :key="item.id" :to="'/home/photolist/'+item.id">
            <img v-lazy="item" :src="item.img_url">
            <div class="photo-bottom">
              <h1>{{item.title}}</h1>
              <p>{{item.zhaiyao}}</p>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      // id:this.$route.params.id
      catelist: [], //用于存储分类列表的数据
      photolist: [] //用于存储图片列表的数据
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getCateList();
    this.getPhotoList(0);
  },
  methods: {
    getCateList() {
      this.$http.get("api/getimgcategory").then(res => {
        //   console.log(res.body)
        if (res.body.status === 0) {
          res.body.message.unshift({
            id: 0,
            title: "全部"
          });
          this.catelist = res.body.message;
        } else {
          //获取失败
        }
      });
    },
    getPhotoList(id) {
      this.$http.get("api/getimages/" + id).then(res => {
        console.log(res.body);
        if (res.body.status === 0) {
          this.photolist = res.body.message;
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.photoList {
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}

.photoList {
  ul {
    list-style: none;
    padding: 0 5px;
    li {
      position: relative;
      background-color: #ccc;
      text-align: center;
      box-shadow: 0 0 10px rgb(138, 133, 133);
      margin-bottom: 10px;
      img {
        width: 100%;
        vertical-align: middle;
      }
      .photo-bottom{
          position: absolute;
          bottom: 0;
          height: 100px;
          background: rgba(0, 0, 0, .3);
          text-align: left;
          color: #fff;
          line-height: 20px;
          
          h1{
              font-size: 14px;
            //   line-height: 20px;
          }
          p{
              font-size: 12px;
              color: #fff;
              margin:0;
          }
      }
    }
  }
}
</style>
