<template>
  <div class="center-container">
    <el-form v-loading="loading" class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules" label-position="top">
      <div class="background-overlay"></div>
      <div class="logo-container">
        <img class="logo" src="../assets/image/logo.png" alt="Logo" />
      </div>
      <h3 class="login-title">登录</h3>
      <el-form-item prop="phone">
        <el-input v-model="loginForm.phone" placeholder="请输入手机号码" prefix-icon="el-icon-mobile"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" @click="login">登录</el-button>
      </el-form-item>
      <div class="login-links">
        <router-link to="/register" class="register-link">注册</router-link>
        <!-- <div v-if="showBackLink" slot="left" @click="$router.back()" class="my-link">返回</div> -->
      </div>

      <div class="login-footer">
        <i class="footer-text">版权所有 &copy; 心境AI之旅团队</i>
      </div>
    </el-form>
  </div>
</template>

<script>
import Register from './Register.vue'
import { login } from '../../api/user'

export default {
  name: 'Login',
  components: {
    Register
  },
  data() {
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      loginRules: {
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入有效的手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9_]{6,10}$/, message: '密码必须为6-10位数字、字母或下划线', trigger: 'change' }
        ]
      },
      loading: false // 登录状态
    }
  },
  // computed: {
  //   showBackLink() {
  //     const fromRoute = this.$route.params.fromRoute
  //     return fromRoute === 'my'
  //   }
  // },
  methods: {
    async login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          try {
            const res = await login(this.loginForm)
            // console.log(res);
            if (res.data.status === 0) {
              // reset the form
              ;(this.loginForm = {}),
                // (this.loading = false),
                this.$toast({
                  type: 'success',
                  message: '欢迎来到心境AI',
                  duration: 2000
                })

              this.$store.commit('setUser', res.data.token)
              this.$store.commit('setToken', res.data.token)
              // bus.$emit('share', res.data.token)
              // console.log(res.data.token)
              // console.log(this.mytoken);
              // this.mytoken = res.data.token
              // console.log(this.mytoken)
              this.$router.push('/layout')
              // this.router.push(this.$route.query.redirect || '/')
            } else {
              this.$message.error(res.data.message)
            }
          } catch (error) {
            // handle the request error
            this.$message.error('登录失败，请检查手机号码或密码是否正确')
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.center-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #667eea;
}

.login-form {
  position: relative;
  /* width: 320px;
  background-color: #3ab4c4;
  border-radius: 8px;
  overflow: hidden;
  padding: 40px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3); */
  color: #fff;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.logo {
  width: 220px;
  height: 220px;
}

.login-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.login-button {
  width: 100%;
  border-radius: 20px;
  height: 40px;
  font-size: 16px;
}

.login-button:hover {
  background-color: #2973c3;
}

.login-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  color: #ccc;
}

.login-links .register-link,
.login-links .my-link {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s;
}

.register-link:hover {
  color: #333;
}

.login-footer {
  display: flex;
  justify-content: center;
  margin-top: 41px;
  color: #ccc;
  font-size: 12px;
}
</style>
