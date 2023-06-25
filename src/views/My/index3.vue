<template>
  <div class="my-container">
    <div>
      <div v-if="user" class="header user-info">
        <div class="left">
          <div class="avatar">
            <van-image
              class="avatar-img"
              fit="cover"
              round
              src="data:image/jpeg;base64,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"
            />
            <span class="name" slot="title">{{ currentUser.nickname }}</span>
          </div>
          <div class="right">
            <van-button class="update-btn" size="small" round to="/user/profile">编辑资料</van-button>
          </div>
        </div>
      </div>

      <div v-else class="header not-login">
        <div class="login-btn" @click="$router.push('/')">
          <img class="mobile-img" src="../../assets/image/mobile.png" alt="" />
          <span class="text">登录</span>
        </div>
      </div>
      <van-grid class="grid-nav mb-4" :column-num="2" clickable>
        <van-grid-item class="grid-item">
          <van-icon name="star-o" class="icon-on-star" />
          <!-- <i slot="icon" class="mood mood-shoucang"> </i> -->
          <span class="text">收藏</span>
        </van-grid-item>
        <van-grid-item class="grid-item">
          <van-icon name="clock-o" class="icon-on-shoucang" />
          <!-- <i slot="icon" class="mood mood-lishi"> </i> -->
          <span class="text">历史</span>
        </van-grid-item>
      </van-grid>
      <van-cell-group inset>
        <van-cell title="消息通知" is-link />
        <van-cell title="嘟嘟同学" is-link />
      </van-cell-group>
      <van-cell v-if="user" class="logout-cell" title="退出登录" @click="onLogout" clickable />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCurrentUser } from '../../../api/user'
import { Cell, CellGroup } from 'vant'
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  name: 'MyIndex',
  data() {
    return {
      currentUser: {} // 当前登录用户信息
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    if (this.user) this.loadCurrentUser()
  },
  methods: {
    onLogout() {
      // 提示用户确认是否退出
      this.$dialog
        .confirm({
          title: '退出提示',
          message: '您确认退出吗'
        })
        .then(() => {
          // 确认执行这里
          this.$toast({
            type: 'success',
            message: '退出成功!',
            duration: 1000
          })
          // 清除用户登录状态
          this.$store.commit('setUser', null)
        })
    },
    async loadCurrentUser() {
      const { data } = await getCurrentUser()
      // console.log(data)
      this.currentUser = data.data
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 180px;
    background: url('../../assets/image/登录.jpg');
    background-size: cover;
    align-items: center;
    padding: 35px;
    box-sizing: border-box;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;

    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .mobile-img {
        width: 50%;
        height: 50%;
        margin-bottom: 15px;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;
    .avatar {
      width: 80px;
      height: 80px;
      // border: 4px solid #fff;
      margin-right: 150px;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
    }
    .name {
      font-size: 18px;
      color: #000;
      margin-bottom: 10px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    update-btn {
      font-size: 24px;
      color: #fff;
    }
  }
}

/deep/ .grid-nav {
  .grid-item {
    height: 100px;
    .icon-on-star {
      font-size: 26px;
      color: #eb5253;
    }
    .icon-on-shoucang {
      font-size: 26px;
      color: #ff9d1d;
    }
    span.text {
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
.logout-cell {
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #667eea;
  // width: 70%;
}
.mb-4 {
  // --van-cell-text-color: red;
  margin-bottom: 5px;
}
// van-cell #title {
//   text-align: left;
// }
</style>
