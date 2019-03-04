<template>
  <!-- 轮播图 -->
  <div class="swiper-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
        <!-- 只有v-bind才区分字符串和变量 -->
        <img :src="item.img" alt :class="{'full':isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotu", "isFull"]
};
</script>

<style lang="less" scoped>
//轮播图样式
.swiper-container {
  .mint-swipe {
    text-align: center;
    height: 260px;
    img {
      height: 100%;
    }
    .full{
      width: 100%;
    }
  }

}
</style>
