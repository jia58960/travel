<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of images" :key="item.id">
        <img class="swiper-img" :src="item.src" alt="携程图片哦">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        images: [{
          id: 1,
          src: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
        },{
          id: 2,
          src: 'http://img1.qunarzz.com/piao/fusion/1810/5d/b63d846958a4702.jpg_750x200_8129cfc3.jpg'
        },{
          id: 3,
          src: 'http://img1.qunarzz.com/piao/fusion/1810/eb/5cacf42b59e91e02.jpg_750x200_9c0a77b0.jpg'
        },{
          id: 4,
          src: 'http://img1.qunarzz.com/piao/fusion/1810/29/45722c73b5b66902.jpg_750x200_231ae61f.jpg'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  height : 0
  width 100%
  padding-bottom : 26.6%
  overflow : hidden
  background: #eeeeee
  .swiper-img
    width: 100%
</style>
