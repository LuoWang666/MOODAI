<template>
  <div>
    <!-- 页面内容 -->
    <router-view></router-view>

    <!-- 底部导航 -->
    <div class="bottom-nav">
      <el-menu :default-active="active" mode="horizontal" :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor">
        <el-menu-item index="1">
          <div class="menu-item-content">
            <i class="el-icon-house icon"></i>
            <span class="menu-text">首页</span>
          </div>
        </el-menu-item>
        <el-menu-item index="2">
          <div class="menu-item-content">
            <i class="el-icon-message icon"></i>
            <span class="menu-text">心理咨询</span>
          </div>
        </el-menu-item>
        <el-menu-item index="3">
          <div class="menu-item-content">
            <i class="el-icon-s-promotion icon"></i>
            <span class="menu-text">心理测评</span>
          </div>
        </el-menu-item>
        <el-menu-item index="4">
          <div class="menu-item-content">
            <i class="el-icon-user icon"></i>
            <span class="menu-text">个人中心</span>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '1', // 默认选中的菜单项
      backgroundColor: '#667eea', // 底部导航的背景颜色
      textColor: '#fff', // 文字颜色
      activeTextColor: '#fff' // 活动项的文字颜色
    }
  }
}
</script>

<style>
/* 页面内容样式 */
.router-view {
  min-height: calc(100vh - 60px); /* 减去底部导航的高度 */
  padding: 20px;
}

/* 底部导航样式 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between; /* 左右不留边距 */
  align-items: center;
  padding: 0 10px; /* 左右内边距调整 */
  background: linear-gradient(to right, #66ea7e, #764ba2);
  animation: gradient-animation 5s infinite alternate; /* 添加渐变动画 */
  border-radius: 10px 10px 0 0; /* 添加底部导航的圆角 */
}

/* 菜单项样式 */
.el-menu-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  transition: color 0.3s ease;
  width: 25%;
  height: 60px;
  position: relative; /* 添加相对定位 */
  overflow: hidden; /* 隐藏溢出部分 */
}

.el-menu-item:hover {
  color: #fff;
}
.el-menu--horizontal.el-menu {
  width: 100%;
}
.el-menu-item.is-active {
  color: #fff;
}

.el-menu-item .icon {
  font-size: 22px;
  margin-bottom: 1px; /* 将图标下移 */
}

.el-menu-item .menu-text {
  margin-top: 1px; /* 调整文字与图标的间距 */
}

/* 高级样式 */
.bottom-nav:before,
.bottom-nav:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scaleY(0.5);
  z-index: 2;
}

.bottom-nav .el-menu-item {
  position: relative;

  z-index: 4;
  transition: transform 0.3s ease;
}

.bottom-nav .el-menu-item:before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.bottom-nav .el-menu-item:hover:before {
  opacity: 1;
}

.bottom-nav .el-menu-item.is-active:before {
  opacity: 1;
}

.bottom-nav .el-menu-item.is-active {
  transform: scale(1.1);
}

/* 响应式样式，适配 iPhone 6/7/8 */
@media (max-width: 375px) {
  .bottom-nav .el-menu-item {
    padding: 5px;
  }

  .bottom-nav .el-menu-item .icon {
    font-size: 20px;
    margin-bottom: 0;
  }

  .bottom-nav .el-menu-item .menu-text {
    font-size: 10px;
    margin-top: 1px;
  }
}

/* 弹性布局 */
@media (max-width: 767px) {
  .bottom-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; /* 去除左右内边距 */
  }

  .el-menu-item {
    flex-grow: 1;
    text-align: center;
    max-width: 25%; /* 菜单栏最大宽度为 25% */
  }

  .el-menu-item .menu-text {
    margin-top: 0;
  }
}

/* 渐变动画 */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

/* 旋转动画 */
@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 缩放动画 */
@keyframes scale-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
