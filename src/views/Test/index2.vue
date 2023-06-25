<template>
  <div class="container">
    <div class="background-image"></div>
    <!-- 头部 -->
    <h1>AI心理测试</h1>
    <h3>MBTI测试（16personalities）</h3>
    <h5>目前使用人数第一的MBTI测试</h5>

    <!-- 三个竖着的按钮 -->
    <div class="button-group">
      <button class="button">
        93题
        <div class="button-text">标准版</div>
      </button>
      <button class="button">
        145题
        <div button-text>专业版</div>
      </button>
      <button class="button">
        200题
        <div button-text>完整版</div>
      </button>
    </div>

    <!-- 底部按钮 -->
    <el-button type="primary" class="test" @click="toLink">开始测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'TestIndex',
  methods: {
    toLink() {
      window.location.href = 'https://mbti.xingyunn.com/pages/assessment/assessment?id=20559406&timestamp=1686568298882#'
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../../assets/image/1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.7;
  z-index: -1;
  width: 120%;
}

.test {
  margin: auto;
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: #667eea;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.test:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.button {
  margin: 40px 10px;
  padding: 20px 40px;
  border-radius: 5px;
  background-color: #7db4d1;
  color: #13362a;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  text-align: center;
}

.button:hover {
  background-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
}

.button div {
  font-size: 14px;
  font-weight: normal;
  margin-top: 20px;
}
.button-text {
  text-align: left;
}
h1 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h3 {
  margin-top: 20px;
}
h5 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
