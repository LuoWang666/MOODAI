<template>
  <div class="article-container">
    <ul class="article-list">
      <li class="infinite-list-item" v-for="article in articles.data" :key="article.id">
        <div class="left">
          <a :href="article.link">
            <h3>{{ article.title }}</h3>
            <p>作者：{{ article.author_name }}</p>
          </a>
        </div>
        <div class="right">
          <img :src="article.image" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getArticles } from '../../../api/article'

export default {
  name: 'Article',
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.loadArticles()
  },
  methods: {
    async loadArticles() {
      try {
        const res = await getArticles()
        // console.log(res)
        if (res.data.status === 0) {
          this.articles = res.data
          // console.log(this.articles)
          // this.$message({
          //   message: '获取文章成功',
          //   type: 'success'
          // })
        } else {
          this.$message.error(res.data.message)
        }
      } catch (error) {
        this.$message.error('获取文章失败')
      }
    }
  }
}
</script>

<style scoped>
.article-container {
  width: 100%;
}

.article-list {
  list-style-type: none;
  margin-top: 15px;
  padding: 0 15px;
}

li {
  display: flex;
  /* align-items: center; */
  height: 100px;
  margin-bottom: 20px;
  border-radius: 10px;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.left {
  flex: 1;
}

.right {
  /* display: flex; */
  /* justify-content: flex-end; */
  /* align-items: center; */
  margin-left: 20px;
}

.right img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
</style>
