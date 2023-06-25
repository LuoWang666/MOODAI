<template>
  <div class="register-container">
    <div class="register-form">
      <div class="logo-container">
        <img class="logo" src="../assets/image/logo.png" alt="Logo" />
      </div>
      <h2 class="register-title">注册</h2>
      <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-position="top" class="form-container">
        <el-form-item prop="phone">
          <el-input v-model="registerForm.phone" placeholder="请输入手机号码" prefix-icon="el-icon-mobile"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" placeholder="请确认密码" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register-button" @click="submitForm">注册</el-button>
        </el-form-item>
        <div class="register-links">
          <router-link to="/" class="login-link">返回登录</router-link>
        </div>
      </el-form>
      <div class="register-footer">
        <i class="footer-text">版权所有 &copy; 心境AI之旅团队</i>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import { register } from '../../api/user'

export default {
  name: 'Register',
  components: {
    Login
  },
  data() {
    return {
      registerForm: {
        phone: '',
        password: ''
      },
      registerRules: {
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入有效的手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9_]{6,10}$/, message: '密码必须为6-10位数字、字母或下划线', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.registerForm.password) {
                callback(new Error('两次输入的密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async submitForm() {
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          try {
            const res = await register(this.registerForm) // 使用正确的 register 函数
            if (res.data.status === 0) {
              // reset the form
              this.registerForm = {}
              // show a success message to the user
              this.$message({
                message: '恭喜您注册成功，请点击返回登录进行登录吧',
                type: 'success'
              })
              this.$store.commit('setUser', res.data.token)
            } else {
              // show an error message to the user
              this.$message.error(res.data.message)
            }
          } catch (error) {
            // handle the request error
            this.$message.error('登录失败，请检查手机号是否正确')
          }
        }
      })
    }
  },
  mounted() {
    // Set the viewport for iPhone 6/7/8
    const viewport = document.querySelector('meta[name=viewport]')
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')

    // Add background color dynamically
    document.body.style.backgroundColor = '#3ab4c4'
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #667eea;
}

.register-form {
  position: relative;
  /* width: 320px; */
  /* background-color: #3ab4c4; */
  /* border-radius: 8px; */
  /* padding: 40px; */
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3); */
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

.register-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.register-button {
  width: 100%;
  border-radius: 20px;
  height: 40px;
  font-size: 16px;
}

.register-button:hover {
  background-color: #2973c3;
}

.register-links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #ccc;
}

.login-link {
  text-decoration: none;
  transition: color 0.3s;
}

.login-link:hover {
  color: #fff;
}

.register-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #ccc;
  font-size: 12px;
}
</style>
