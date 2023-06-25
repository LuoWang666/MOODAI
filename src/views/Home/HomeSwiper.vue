<template>
  <div class="swiper-size">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in bannerImg" :key="index">
        <img class="swiper-img" :src="slide" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      bannerImg: [require('../../assets/image/5.jpg'), require('../../assets/image/6.jpg'), require('../../assets/image/7.jpg'), require('../../assets/image/8.jpg')]
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-size {
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 200px;
  background-color: #000;
  overflow: hidden;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-slide {
      height: 100%;
      text-align: center;

      .swiper-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
        transition: transform 0.5s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .swiper-pagination {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);

      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        margin: 0 5px;

        &.swiper-pagination-bullet-active {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>
