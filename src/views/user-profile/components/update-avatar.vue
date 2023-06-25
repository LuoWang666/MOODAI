<template>
  <div class="update-avatar">
    <img class="image" :src="image" ref="image" />
    <van-nav-bar class="toolbar" left-text="取消" right-text="确认" @click-left="$emit('close')" @click-right="onConfirm" />
  </div>
</template>

<script>
import { updateUserAvatar } from '../../../../api/user'
import axios from 'axios'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  name: 'UpdateAvatar',
  props: {
    file: {
      // type: Object,
      required: true
    }
  },
  data() {
    return {
      image: window.URL.createObjectURL(this.file),
      cropper: null // 裁切器实例
    }
  },
  methods: {
    // onConfirm() {
    //   this.cropper.getCroppedCanvas().toBlob((blob) => {
    //     this.updateUserAvatar(blob)
    //   })
    // },
    // async updateUserAvatar(blob) {
    //   this.$toast.loading({
    //     message: '保存中...',
    //     forbidclick: true, //禁止背景点击
    //     duration: 0 //持续展示
    //   })
    //   try {
    //     const formData = new FormData()
    //     formData.append('avatar', blob)
    //     const { data } = await updateUserAvatar(formData)
    //     console.log(data)
    //     //关闭弹出层
    //     this.$emit('close ')
    //     //更新视图
    //     this.$emit(' update-avatar ', data.data.avatar)
    //     this.$toast.success('保存成功')
    //   } catch (err) {
    //     this.$toast.fail('保存失败')
    //   }

    getCroppedCanvas() {
      return new Promise((resolve) => {
        this.cropper.getCroppedCanvas().toBlob((file) => {
          resolve(file)
        })
      })
    },
    async onConfirm() {
      console.log('onConfirm')

      this.$toast.loading({
        message: '保存中',
        forbidclick: true // 禁止用户点击
      })

      const file = await this.getCroppedCanvas()
      const fd = new FormData()
      fd.append('avatar', file)
      // await updateUserAvatar(fd)
      axios
        .post(
          'http://47.93.158.144:3000/my/update/avatar',
          { avatar: fd },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem('MOODAI_USER ')
            }
          }
        )
        .then((response) => {
          // console.log(response.data)
          if (response.data.status === 0) {
            this.$toast.fail('保存失败')
          } else if (response.data.status === 1) {
            this.$toast.success('保存成功')
            //更新父组件 v-model 绑定的数据
            this.$emit('update-avatar', window.URL.createObjectURL(file))
            this.$emit('close')
          }
        })
      //   this.$toast.success('保存成功')
      //   // 更新父组件中的用户头像
      //   this.$emit('update-avatar', window.URL.createObjectURL(file))
      //   // 关闭弹出层
      //   this.$emit('close')
      // }
    }
  },
  mounted() {
    // 获取需要裁切的图片 DOM
    const image = this.$refs.image
    this.cropper = new Cropper(image, {
      viewMode: 1,
      dragMode: 'move',
      aspectRatio: 1,
      autoCropArea: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      background: false,
      movable: true
    })
  }
}
</script>

<style scoped lang="less">
.update-avatar {
  height: 100%;
}

.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
}

.image {
  display: block;
  max-width: 100%;
}
</style>
