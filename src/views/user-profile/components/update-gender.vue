<template>
  <div class="update-gender">
    <van-picker show-toolbar :columns="columns" @cancel="$emit('close')" @confirm="onConfirm" />
  </div>
</template>

<script>
import { updateUserProfile } from '../../../../api/user'
import axios from 'axios'
export default {
  name: 'UpdateGender',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showPicker: false,
      columns: ['男', '女'],
      localgender: this.value
    }
  },
  methods: {
    async onConfirm(localgender) {
      this.localgender = localgender
      this.$toast.loading({
        message: '保存中',
        forbidclick: true, // 禁止用户点击
        duration: 0 //持续影响
      })
      axios
        .post(
          'http://47.93.158.144:3000/my/userinfo/gender',
          { gender: this.localgender },
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
            this.$emit('input', this.localgender)
            this.$emit('close')
          } else if (response.data.status === 1) {
            this.$toast.fail('保存失败')
          }
        })
    }
  }
}
</script>

<style scoped lang="less"></style>
