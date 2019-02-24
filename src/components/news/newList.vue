<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link :to="'/home/newsdital/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time | momentime('YYYY-MM-DD HH:mm:ss')}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

//导入toast组件
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      newList: [] //用于存储获取到的数据
    };
  },
  created() {
    this.getNewList();
  },
  methods: {
    getNewList() {
      //此处不加/
      this.$http.get("api/getnewslist").then(res => {
        // console.log(res);
        if (res.body.status === 0) {
          //成功了
          this.newList = res.body.message;
        } else {
          //失败了  提示信息
          Toast("新闻列表获取失败!!");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  h3 {
    font-size: 13px;
  }
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: rgb(28, 146, 224);
    }
  }
}
</style>
