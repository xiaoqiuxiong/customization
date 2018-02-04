<template>
  <div class="swiper-box">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide :key="item.id" v-for="item in pic">
        <img :src="item.pic" alt="">
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide :key="item.id" v-for="item in pic">
        <img :src="item.pic" alt="">
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['pic'],
  name: 'carrousel',
  data() {
    return {
      swiperOptionTop: {
        notNextTick: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        autoplayDisableOnInteraction: false,
      },
      swiperOptionThumbs: {
        notNextTick: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.params.control = swiperThumbs
      swiperThumbs.params.control = swiperTop
  }
}

</script>
<style scoped>
.swiperTop .swiper-slide{
   padding: .4rem;
}
  .swiper-slide {
    background-size: cover;
    background-position: center;

  }
  .gallery-top {
  /*  height: 100%!important;
    width: 100%;*/
  }
  .gallery-thumbs {
    height: 17%!important;
    box-sizing: border-box;
    padding: 10px 0;
    margin-top: 1rem;
  }
  .gallery-thumbs .swiper-slide {
    width: 16%;
    height: 100%;
    border: 2px solid #F0F0F0;
  }
  .gallery-thumbs .swiper-slide-active {
    border-color: #6FCBD7;
  }
  .swiper-box {
    padding: 0 30px;
    padding-top: 0.6rem;
  }

</style>
