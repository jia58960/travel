<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" alt="携程图片哦">
    </swiper-slide>
    <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg" alt="携程图片哦">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          // loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>