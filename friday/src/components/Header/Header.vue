<template>
  <div>
    <!--<headertop></headertop>-->
    <div class="header-center">
      <headercenter></headercenter>
    </div>
    <headernav></headernav>
  </div>
</template>

<script>
    import Headertop from '@/components/Header/Headertop.vue';
    import Headercenter from './Headercenter.vue';
    import Headernav from './Headernav.vue';

    export default {
        name: 'header',
        data () {
            return {}
        },
        components:{
            Headertop:Headertop,
            Headercenter,
            Headernav
        }
    }
</script>


<style scoped>
  .header-center{
    width: 1280px;
    margin: 0 auto;
  }
</style>
