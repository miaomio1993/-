<template>
  <div class="s-index-wrap">
    <indexswiper :list="imgList"></indexswiper>
    <div class="s-index-cont">
      <indexhot></indexhot>
      <indexfriday></indexfriday>
      <indexcont></indexcont>
    </div>
  </div>
</template>

<script>
    import Indexswiper from "./Indexswiper.vue";
    import Indexhot from "./Indexhot.vue";
    import Indexfriday from "./Indexfriday.vue";
    import Indexcont from  "@/components/Index/Indexcont.vue"
    export default {
        name: 'index',
        data () {
            return {
              imgList:[
                {
                  img:require("./img/index-swiper1.jpg")
                },
                {
                  img:require("./img/index-swiper2.jpg")
                },
                {
                  img:require("./img/index-swiper3.jpg")
                },
                {
                  img:require("./img/index-swiper4.jpg")
                }
              ]
            }
        },
        components:{
            Indexswiper,
            Indexhot,
            Indexfriday,
            Indexcont
        }
    }
</script>


<style scoped>
  .s-index-wrap{
    width: 100%;
  }
  .s-index-cont{
    width: 1280px;
    margin: 0 auto;
  }
</style>
