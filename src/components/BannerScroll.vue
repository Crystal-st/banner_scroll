<template>
  <div class="main">
      <!-- 菜单位置 -->
      <div class="menu-box"></div>
      <!-- 主菜单 -->
      <div class="menu" id="menu">
        <div class="menu-item">
          <a href="">前端课程</a>
          <i class="iconfont">&#xe60e;</i>
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
          <i class="iconfont">&#xe60e;</i>
        </div>
      </div>
      <!-- 子菜单 -->
      <div class="sub-menu hide" id="sub-menu">
        <div class="sub-menu-box">
          <div class="sub-content">
            <div class="content-title">前端课程</div>
            <div class="content-option">
              <span class="option-title">基础课程:</span>
              <span>HTML</span>
              <span class="ml mr">/</span>
              <span>CSS</span>
              <span class="ml mr">/</span>
              <span>JS</span>
            </div>
            <div class="content-option">
              <span class="option-title">进阶课程:</span>
              <span>HTML5</span>
              <span class="ml mr">/</span>
              <span>CSS3</span>
              <span class="ml mr">/</span>
              <span>JS组件</span>
            </div>
            <div class="content-option">
              <span class="option-title">高阶课程:</span>
              <span>页面布局</span>
              <span class="ml mr">/</span>
              <span>CSS艺术</span>
              <span class="ml mr">/</span>
              <span>前端框架重构</span>
            </div>
          </div>
        </div>
        <div class="sub-menu-box">
          <div class="sub-content">
            <div class="content-title">前端课程</div>
            <div class="content-option">
              <span class="option-title">基础课程:</span>
              <span>HTML</span>
              <span class="ml mr">/</span>
              <span>CSS</span>
              <span class="ml mr">/</span>
              <span>JS</span>
            </div>
            <div class="content-option">
              <span class="option-title">进阶课程:</span>
              <span>HTML5</span>
              <span class="ml mr">/</span>
              <span>CSS3</span>
              <span class="ml mr">/</span>
              <span>JS组件</span>
            </div>
            <div class="content-option">
              <span class="option-title">高阶课程:</span>
              <span>页面布局</span>
              <span class="ml mr">/</span>
              <span>CSS艺术</span>
              <span class="ml mr">/</span>
              <span>前端框架重构</span>
            </div>
          </div>
        </div>
        <div class="sub-menu-box">
          <div class="sub-content">
            <div class="content-title">前端课程</div>
            <div class="content-option">
              <span class="option-title">基础课程:</span>
              <span>HTML</span>
              <span class="ml mr">/</span>
              <span>CSS</span>
              <span class="ml mr">/</span>
              <span>JS</span>
            </div>
            <div class="content-option">
              <span class="option-title">进阶课程:</span>
              <span>HTML5</span>
              <span class="ml mr">/</span>
              <span>CSS3</span>
              <span class="ml mr">/</span>
              <span>JS组件</span>
            </div>
            <div class="content-option">
              <span class="option-title">高阶课程:</span>
              <span>页面布局</span>
              <span class="ml mr">/</span>
              <span>CSS艺术</span>
              <span class="ml mr">/</span>
              <span>前端框架重构</span>
            </div>
          </div>
        </div>
        <div class="sub-menu-box">
          <div class="sub-content">
            <div class="content-title">前端课程</div>
            <div class="content-option">
              <span class="option-title">基础课程:</span>
              <span>HTML</span>
              <span class="ml mr">/</span>
              <span>CSS</span>
              <span class="ml mr">/</span>
              <span>JS</span>
            </div>
            <div class="content-option">
              <span class="option-title">进阶课程:</span>
              <span>HTML5</span>
              <span class="ml mr">/</span>
              <span>CSS3</span>
              <span class="ml mr">/</span>
              <span>JS组件</span>
            </div>
            <div class="content-option">
              <span class="option-title">高阶课程:</span>
              <span>页面布局</span>
              <span class="ml mr">/</span>
              <span>CSS艺术</span>
              <span class="ml mr">/</span>
              <span>前端框架重构</span>
            </div>
          </div>
        </div>
      </div>

    <!-- 轮播图 -->
    <div class="banner" id="banner">
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
    <div class="pic_button_left" id="pic_button_left">
      <i class="iconfont">&#xe665;</i>
    </div>
    <div class="pic_button_right" id="pic_button_right">
      <i class="iconfont">&#xe666;</i>
    </div>

    <!-- 轮播图提示圆点 -->
    <div class="tipPoint" id="tipPoint">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import {byId} from '../JS/MyEvents'
export default {
  name: 'BannerScroll',
  data(){},
  create:function(){},
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
