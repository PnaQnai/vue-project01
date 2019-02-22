<template>
  <!-- 头部 -->
  <div class="app-container">
    <div class="header-fix">
      <mt-header fixed title="固定在顶部"></mt-header>
    </div>
    <div class="body-content">
      <h1>wowowo</h1>
    </div>
    <!-- 中间部分 -->
    <!-- 底部导航 -->
    <div>
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">9</span>
          </span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header-fix {
  margin-bottom: 40px;
}
</style>
