<template>
  <swiper :options="swiperOption" class="s-swiper-wrap"  ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in list" :key="item.id">
      <div class="slide">
        <a href="javascript:void (0)" :style="{backgroundImage:'url('+item.img+')'}"></a>
      </div>
    </swiper-slide>


    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">
    </div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
  </swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'indexswiper',
        data () {
            return {
              swiperOption: {

                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                loop:true,
                grabCursor : true,
//                setWrapperSize :true,
//                paginationType : 'custom',
                pagination : '.swiper-pagination',
                paginationClickable :true,
                autoplayDisableOnInteraction: false,
//                prevButton:'.swiper-button-prev',
//                nextButton:'.swiper-button-next',
//                observeParents:true,
              },

            }
        },
        props:{
          list:Array,
        },
        components:{
          swiper,
          swiperSlide
        }
    }
</script>


<style scoped>
  .s-swiper-wrap{
    width: 100%;
    min-width: 1280px;

  }
  .slide{
    height: 500px;
  }
  .slide>a{
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: 1920px 510px;
  }
  .swiper-pagination>swiper-pagination-bullet{
    width: 15px;
    height: 15px;
  }
</style>
