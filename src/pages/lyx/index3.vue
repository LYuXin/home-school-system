<template>
  <div class="app-container">
  <div  class="dingwei">
    <!-- 导航栏 -->
<el-menu mode="horizontal">
  <el-menu-item index="1"><router-link to="/index2/index3/accordingClass">班级</router-link></el-menu-item>
  <el-menu-item index="2"><router-link to="/index2/index3/accordingTime">实时</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/index2/index3/accordingLike">排行榜</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/index2/index3/accordingConcern">关注</router-link></el-menu-item>
  <el-menu-item index="5"><router-link to="/postdynam">发布</router-link></el-menu-item>
</el-menu>
</div>
<!-- 动态排行 -->
<div class="dongtao">
<router-view></router-view>
</div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.app-container{
  position: relative;
padding-top: 0%;
width: 100%;
}
.dingwei{
    position: fixed;
    top: 5%;
    left: 0%;
    z-index: 999;
    width: 100%;
}
.dongtao{
   padding: 1%;
   margin-top: 16%;
}
</style>
