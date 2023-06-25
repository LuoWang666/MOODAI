<template>
  <transition name="slide">
    <div class="chatroom">
      <!-- 头部 -->
      <div class="header" @click="goback">
        <el-page-header class="back"></el-page-header>
      </div>
      <div class="content" ref="scrollContainer">
        <div class="content-wrapper">
          <div>
            <div class="content-top">
              <p>———欢迎来到AI咨询室———</p>
            </div>
            <div class="content-body">
              <ul v-for="item in content" :key="item">
                <li class="ask" v-show="item.askContent">
                  <img class="userimg" :src="item.askImg" />
                  <p>{{ item.askContent }}</p>
                </li>
                <li class="reply" v-show="item.replyContent">
                  <img class="userimg" :src="item.replyImg" />
                  <p>{{ item.replyContent }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="send">
          <input type="text" placeholder="请输入内容" class="sText" ref="sTest" />
          <input type="button" class="btn" value="发送" @click="sendContent" :disabled="loading" />
        </div>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
// import BScroll from 'better-scroll'
// import { ref } from 'vue'
// import { mapGetters } from 'vuex'
import axios from 'axios'
import { Toast } from 'vant'

export default {
  components: {
    [Toast.name]: Toast
  },
  data() {
    return {
      text: '', // 输入框的文字
      randomReply: [],
      content: [
        {
          replyImg: require('../../assets/image/2.png'),
          replyContent: '您好，我是你的心理助手嘟嘟，有什么能帮到你吗？'
        }
      ],
      messageHistory: [],
      url: 'http://47.93.158.144:3000/dia/chat',
      counts: 0,
      loading: false,
      sstt: ''
    }
  },
  watch: {
    content: {}
  },
  computed: {},
  created() {
    // this.sendContent()
  },
  mounted() {
    //     this.scrollToBottom();
  },
  methods: {
    goback() {
      this.$router.replace('/layout')
    },
    sendContent() {
      this.text = this.$refs.sTest.value
      this.loading = true

      if (this.text !== '') {
        this.sstt = true
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '加载中'
        })
        this.content.push({
          askImg: require('../../assets/image/1.png'),
          askContent: this.text
        })
        axios
          .post(
            this.url,
            { dialogue: this.text },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('MOODAI_USER ')
              }
            }
          )
          .then((response) => {
            var result = response.data
            this.loading = false
            this.content.push({
              replyImg: require('../../assets/image/2.png'),
              replyContent: result.data
            })
            const timer = setInterval(() => {
              this.sstt = false
              if (this.sstt) {
                toast.message = `加载中`
              } else {
                clearInterval(timer)
                // 手动清除 Toast
                Toast.clear()
              }
            }, 100)
            // console.log(result)
          })
          .catch((error) => {
            console.error(error)
          })
      }
      setTimeout(() => {
        setTimeout(() => {
          const container = this.$refs.scrollContainer
          container.scrollTop = container.scrollHeight
        }, 0)
      }, 0)

      this.$refs.sTest.value = '' // 清空输入框的内容
      // this.scrollToBottom();
      setTimeout(() => {
        const container = this.$refs.scrollContainer
        container.scrollTop = container.scrollHeight
      }, 0)
    },
    clearContent() {
      this.content = []
    },
    navigateToMyPage() {
      // 检查用户是否已登录
      if (localStorage.getItem('token')) {
        // 这里需要替换为你判断用户是否已登录的逻辑
        this.$router.push({ path: '/my' }) // 跳转到我的页面
      } else {
        this.$router.push({ path: '/' }) // 跳转到登录页面
      }
    }
  }
}
</script>

<style scoped>
.chatroom {
  background: url('../../assets/image/1.png');
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  width: 100%;
}
.back {
  margin-top: 15px;
  margin-left: 15px;
}

.userimg {
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 15%;
}
.content {
  position: fixed;
  top: 0.75rem;
  bottom: 1.23rem;
  left: 0;
  right: 0;
  overflow-y: scroll;
  /*border: 1px solid red;*/
}
.content-wrapper {
  height: 100%;
  scroll-behavior: smooth;
  background-color: transparent;
}
.content-top {
  font-size: 0.2rem;
  color: #ea66bc;
  text-align: center;
  margin-top: -0.06rem;
}
.content-top p {
  font-size: 23px;
}

.content-body {
  position: relative;
  padding: 0.04rem 0.08rem;
  overflow-y: scroll;
  /*border: 1px solid blue;*/
}
.content-body li {
  position: relative;
  overflow: hidden;
  margin-bottom: 0.15rem;
  line-height: 0.28rem;
}
.ask {
  word-wrap: break-word;
  text-align: right;
}
.reply {
  word-wrap: break-word;
  text-align: left;
}
li.reply {
  margin-left: 0.02rem;
}
.ask img {
  float: right;
  margin-left: 0.1rem;
}
.reply img {
  float: left;
  margin-right: 0.1rem;
}
.reply p,
.ask p {
  border-radius: 0.08rem;
  text-align: left;
  font: 0.15rem '微雅';
  line-height: 0.32rem;
}
.ask p {
  float: right;
  padding: 0.03rem 0.1rem;
  max-width: 2.6rem;
  background: #228b22;
  color: #fff;
}
.reply p {
  left: 2pc;
  float: left;
  padding: 0.03rem 0.1rem;
  max-width: 2.6rem;
  background: #fff;
}
.bottom {
  position: fixed;
  height: 0.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
}
.send {
  display: flex;
  background-color: rgb(44, 44, 50);
}
.sText {
  flex: 6;
  height: 0.3rem;
  margin: 0.1rem;
  margin-right: 0.1rem;
  border: 0;
  padding-left: 0.05rem;
  border-bottom: 0.01rem solid rgba(153, 153, 153, 0.8);
  background-color: #cbcbcb;
  /*border: 1px solid rgba(153,153,153,0.8);*/
  font-size: 0.15rem;
  border-radius: 0.08rem;
}
.sText.active {
  background-color: red;
}
.btn {
  flex: 1;
  width: 0.65rem;
  height: 0.3rem;
  margin: 0.1rem 0.08rem;
  margin-left: 0.04rem;
  margin-right: 0.14rem;
  border: 0;
  border-radius: 0.05rem;
  /*float: right;*/
  text-align: center;
  font-size: 0.16rem;
  color: white;
  background-color: #09bb07;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
.tabbar {
  opacity: 0.8;
  --van-tabbar-item-icon-size: 0.37rem;
  --van-tabbar-height: 0.7rem;
  --van-tabbar-item-font-size: 0.15rem;
}
.container {
  margin-left: 0.07rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
