<template>
  <div class="main">
    <!-- 左侧菜单 -->
    <div>
      <!-- 菜单位置 -->
      <div class="menu-box"></div>
      <!-- 主菜单 -->
      <div class="menu" id="menu">
        <div class="menu-item">
          <a href="">前端课程</a>
          <img src="../assets/iconfont/Arrow-Right.png" alt="为啥呢">
        </div>
        <div class="menu-item">
          <a href="">后端课程</a>
          <i class="iconfont">&#xe60e;</i>
        </div>
        <div class="menu-item">
          <a href="">服务器开发</a>
          <i class="iconfont">&#xe60e;</i>
        </div>
        <div class="menu-item">
          <a href="">云服务开发</a>
          <i class="iconfont">&#xe63c;</i>
        </div>
      </div>
      <!-- 子菜单 -->
      <div class="sub-menue">
        <div>
      
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

    <!-- 轮播图提示圆点 -->
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
<style>

</style>
