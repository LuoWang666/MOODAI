<template>
  <div class="update-email">
    <van-nav-bar title="修改邮箱" left-text="取消" right-text="完成" @click-left="$emit('close')" @click-right="onConfirm" />

    <div class="van-field-wrap">
      <van-field v-model.trim="localEmail" rows="2" autosize type="textarea" maxlength="25" placeholder="请输入邮箱" show-word-limit />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateEmail',
  props: {
    // 声明接收父组件 v-model 传递的 value 值
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localEmail: this.value
    }
  },
  methods: {
    async onConfirm() {
      // 请求提交更新用户昵称
      // 更新成功 -> 修改父组件的 name -> 关闭弹出层
      this.$toast.loading({
        message: '保存中',
        forbidclick: true, // 禁止用户点击
        duration: 0 //持续影响
      })
      const emails = this.localEmail
      if (!emails.length) {
        this.$toast('邮箱不能为空')
      }
      if (emails.length > 0) {
        console.log(emails)
        axios
          .post(
            'http://47.93.158.144:3000/my/userinfo/email',
            { email: emails },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('MOODAI_USER ')
              }
            }
          )
          .then((response) => {
            console.log(response.data)
            if (response.data.status === 0) {
              this.$toast.success('保存成功')
              // 发布 input 事件，更新父组件 v-model 绑定的数据
              this.$emit('input', emails)
              this.$emit('close')
            } else if (response.data.status === 1) {
              this.$toast.fail('保存失败')
            }
          })
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-field-wrap {
  padding: 10px;
}
</style>
