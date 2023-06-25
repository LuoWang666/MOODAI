<template>
  <div class="home-view">
    <div class="swiper-container">
      <HomeSwiper />
    </div>
    <div class="search-container">
      <HomeSearch />
    </div>
    <div class="background-image"></div>
    <div class="article_container">
      <!-- <Article v-for="article in articles" :key="article.id" :article="article" /> -->
      <Article></Article>
      <router-view></router-view>
    </div>
    <!-- <BottomNav /> -->
  </div>
</template>

<script>
// import BottomNav from '@/components/BottomNav.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeSearch from './HomeSearch.vue'
import Article from './Article.vue'
import { getArticles } from '../../../api/article'

export default {
  name: 'HomeView',
  components: {
    // BottomNav,
    HomeSwiper,
    HomeSearch,
    Article
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.home-view {
  position: relative;
}

.background-image {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0;
  width: 110%;
  height: 100%;
  overflow: auto;
  background-image: url('../../assets/image/首页.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.6;
  z-index: -1;
}

.swiper-container {
  background-color: #ff0000;
}

.search-container {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1px;
  z-index: 2;
}

.search-container > * {
  width: 100%;
  max-width: 600px;
}

.article_container {
  height: calc(100vh - 200px - 61px);
  max-height: calc(100vh - 200px - 61px);
  overflow: auto;
}
</style>
