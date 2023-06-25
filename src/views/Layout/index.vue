<template>
  <div class="layout-container">
    <home-view v-if="this.hindex === 1"></home-view>
    <index-1 v-if="this.hindex === 2"></index-1>
    <index-2 v-if="this.hindex === 3"></index-2>
    <index-3 v-if="this.hindex === 4"></index-3>
    <!-- <router-view></router-view> -->
    <!-- 底部导航 -->
    <div class="bottom-nav" v-if="showBottomNav">
      <el-menu :default-active="active" mode="horizontal" :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor" router>
        <el-menu-item @click="change(1)">
          <div class="menu-item-wrapper">
            <div class="menu-item-content">
              <i class="el-icon-house icon"></i>
              <span class="menu-text">首页</span>
            </div>
          </div>
        </el-menu-item>
        <el-menu-item @click="goback2">
          <div class="menu-item-wrapper">
            <div class="menu-item-content">
              <i class="el-icon-message icon"></i>
              <span class="menu-text">心理咨询</span>
            </div>
          </div>
        </el-menu-item>
        <el-menu-item @click="change(3)">
          <div class="menu-item-wrapper">
            <div class="menu-item-content">
              <i class="el-icon-s-promotion icon"></i>
              <span class="menu-text">心理测评</span>
            </div>
          </div>
        </el-menu-item>
        <el-menu-item @click="change(4)">
          <div class="menu-item-wrapper">
            <div class="menu-item-content">
              <i class="el-icon-user icon"></i>
              <span class="menu-text">{{ $store.state.user ? '我的' : '未登录' }}</span>
            </div>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import Index1 from '../Counseling/index1.vue'
import HomeSearch from '../Home/HomeSearch.vue'
import HomeView from '../Home/HomeView.vue'
import Index3 from '../My/index3.vue'
import Index2 from '../Test/index2.vue'
export default {
  components: { HomeView, HomeSearch, Index1, Index2, Index3 },
  name: 'LayoutIndex',
  data() {
    return {
      active: this.$route.path, // 默认选中的菜单项，根据当前路由的路径设置
      backgroundColor: '#667eea', // 底部导航的背景颜色
      textColor: '#fff', // 文字颜色
      activeTextColor: '#fff', // 活动项的文字颜色
      hindex: 1,
      showBottomNav: true
    }
  },

  methods: {
    goback2() {
      this.$router.push('/counseling')
    },
    change(i) {
      this.hindex = i
    }
  },
  mounted() {
    // 监听路由变化
    this.$router.beforeEach((to, from, next) => {
      // 判断是否跳转到心理咨询页面
      if (to.path === '/counseling') {
        this.showBottomNav = false
      } else {
        this.showBottomNav = true
      }
      next()
    })
  }
}
</script>

<style scoped>
.menu-item-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  transition: color 0.3s ease;
  width: 100%;
  height: 100%;
}

.menu-item-wrapper .icon {
  font-size: 22px;
  margin-bottom: 1px;
}

.menu-item-wrapper .menu-text {
  margin-top: 5px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: linear-gradient(to right, #66ea7e, #764ba2);
  animation: gradient-animation 5s infinite alternate;
  border-radius: 10px 10px 0 0;
}

@media (max-width: 767px) {
  .bottom-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .el-menu-item {
    flex-grow: 1;
    text-align: center;
    max-width: 25%;
  }

  .el-menu-item .menu-text {
    margin-top: 0;
  }
}

/* Rest of your styles */
</style>
