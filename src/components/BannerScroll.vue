<template>
  <div class="main">
    <!-- 左侧菜单 -->
    <div>
      <!-- 主菜单 -->
      <div class="menu">
        <p>手机数码</p>
        <p>电脑耗材</p>
        <p>家电家具</p>
        <p>美容护肤</p>
        <p>鞋帽服饰</p>
      </div>
      <!-- 子菜单 -->
      <div class="sub-menue">
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <!-- 共4张图片 -->
      <a href="#">
        <div class="picture_banner pic1"></div>
      </a>
      <a href="#">
        <div class="picture_banner pic2"></div>
      </a>
      <a href="#">
        <div class="picture_banner pic3"></div>
      </a>
      <a href="#">
        <div class="picture_banner pic4"></div>
      </a>
    </div>
    <!-- 轮播图上的左右按钮 -->
    <div class="pic_button_left">
      <i class="iconfont">&#xe665;</i>
    </div>
    <div class="pic_button_right">
      <i class="iconfont">&#xe666;</i>
    </div>

    <!-- 轮播图提示原点 -->
    <div class="tipPoint">
      <span ></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerScroll',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
