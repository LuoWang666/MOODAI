<template>
  <div class="user-profile">
    <van-nav-bar class="app-nav-bar" title="个人信息" left-arrow @click-left="$router.go(-1)" />
    <van-cell title="头像" is-link center @click="$refs.file.click()"> <van-image class="avatar" round fit="cover" mini :src="user.avatar" /></van-cell>
    <input type="file" accept="image/*" hidden ref="file" @change="onFileChange" />
    <!-- accept：唯一文件类型说明符 -->
    <van-cell title="昵称" is-link :value="user.nickname" @click="isEditNameShow = true" />
    <van-cell title="性别" is-link :value="user.gender" @click="isEditGenderShow = true" />
    <van-cell title="邮箱" is-link :value="user.email" @click="isEditEmailShow = true" />

    <!-- 修改昵称 -->
    <van-popup v-model="isEditNameShow" position="bottom" :style="{ height: '100%' }">
      <update-name v-if="isEditNameShow" @close="isEditNameShow = false" v-model="user.nickname" />
    </van-popup>

    <!-- 修改性别 -->
    <van-popup v-model="isEditGenderShow" position="bottom">
      <update-gender v-if="isEditGenderShow" v-model="user.gender" @close="isEditGenderShow = false" />
    </van-popup>

    <!-- 修改邮箱 -->
    <van-popup v-model="isEditEmailShow" position="bottom" :style="{ height: '100%' }">
      <update-email v-if="isEditEmailShow" v-model="user.email" @close="isEditEmailShow = false" />
    </van-popup>

    <!-- 修改用户头像 -->
    <van-popup class="update-avatar-popup" v-model="isEditAvatarShow" style="height: 100%" position="bottom">
      <update-avatar v-if="isEditAvatarShow" :file="previewImage" @close="isEditAvatarShow = false" @update-avatar="user.avatar = $event" />
    </van-popup>
  </div>
</template>

<script>
import { getUserProfile } from '../../../api/user.js'
import UpdateName from '../user-profile/components/update-name.vue'
import UpdateGender from '../user-profile/components/update-gender'
import UpdateEmail from '../user-profile/components/update-email'
import UpdateAvatar from '../user-profile/components/update-avatar'
export default {
  name: 'UserProfile',
  components: {
    UpdateName,
    UpdateGender,
    UpdateEmail,
    UpdateAvatar
  },
  data() {
    return {
      user: {}, // 用户数据
      isEditNameShow: false, // 编辑昵称的显示状态
      isEditGenderShow: false, // 编辑性别的显示状态
      isEditEmailShow: false, // 编辑邮箱的显示状态
      isEditAvatarShow: false, // 编辑头像的显示状态
      previewImage: null // 上传预览图片
    }
  },
  created() {
    this.loadUserProfile()
  },
  methods: {
    async loadUserProfile() {
      try {
        const { data } = await getUserProfile()
        console.log(data)
        this.user = data.data
      } catch (err) {
        this.$toast('数据获取失败')
      }
    },
    onFileChange() {
      // console.log('onFileChange')

      // 在弹出层里面预览图片
      // const blob = window.URL.createObjectURL(this.$refs.file.files[0])
      // console.log(blob)
      const file = this.$refs.file.files[0]
      this.previewImage = file

      // 展示弹出层
      this.isEditAvatarShow = true

      // 为了解决选择相同文件不触发 change 事件，所以需要清空 file 的 value
      this.$refs.file.value = ''
    }
  }
}
</script>

<style scoped lang="less">
.van-popup {
  background-color: #f5f7f9;
}

.update-avatar-popup {
  background-color: #000;
}
</style>
