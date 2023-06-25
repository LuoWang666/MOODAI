import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'
import '../src/style/base.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(ElementUI)
// VueAxios 与 axios的位置不能交换，否则出现TypeError: Cannot readproperty 'protocol' of undefined
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
