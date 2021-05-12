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
      <a href="#" v-bind:class="{ hide:  index!=0}">
        <div class="picture_banner pic1"></div>
      </a>
      <a href="#" v-bind:class="{ hide:  index!=1}">
        <div class="picture_banner pic2"></div>
      </a>
      <a href="#" v-bind:class="{ hide:  index!=2}">
        <div class="picture_banner pic3"></div>
      </a>
      <a href="#" v-bind:class="{ hide:  index!=3}">
        <div class="picture_banner pic4"></div>
      </a>
    </div>
    <!-- 轮播图上的左右按钮 -->
    <div class="pic_button_left" id="pic_button_left" @click="butLeftClick">
      <i class="iconfont">&#xe665;</i>
    </div>
    <div class="pic_button_right" id="pic_button_right" @click="butLeftRight">
      <i class="iconfont">&#xe666;</i>
    </div>

    <!-- 轮播图提示圆点 -->
    <div class="tipPoint" id="tipPoint">
      <span v-bind:class="{ active:  index==0}"></span>
      <span v-bind:class="{ active:  index==1}"></span>
      <span v-bind:class="{ active:  index==2}"></span>
      <span v-bind:class="{ active:  index==3}"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannerScroll',
  data(){
    return{
      index: 0,
    }
  },
  methods: {
    
    butLeftClick() {
      if(this.index==0) {
        this.index = this.size-1;
      }else{
        this.index--;
      }
    },
    butLeftRight() {
      if(this.index==3) {
        this.index = 0;
      }else{
        this.index++;
      }
    }

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
