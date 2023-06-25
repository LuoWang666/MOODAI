<!-- HomeSearch.vue -->
<template>
  <div class="parent-container">
    <div class="search-container">
      <form @submit.prevent="handleSubmit">
        <div class="search-input">
          <input type="text" v-model="searchTerm" placeholder="懂你的人~" />
          <button type="submit">
            <i class="material-icons">search</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    handleSubmit() {
      // 处理搜索逻辑
      console.log('搜索：', this.searchTerm)
    }
  }
}
</script>

<style scoped>
.parent-container {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 999;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1px;
  opacity: 0.8;
}

.search-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 0 16px;
}

.search-input input[type='text'] {
  border: none;
  background-color: transparent;
  flex: 1;
  margin: 0 8px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

.search-input button[type='submit'] {
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.search-input button[type='submit']:hover i {
  color: #357ae8;
  transform: scale(1.2);
}

.material-icons {
  color: #999;
  font-size: 24px;
  transition: all 0.3s ease-in-out;
}
</style>
