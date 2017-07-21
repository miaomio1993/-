<template>
  <div class="s-detail">
    <detailtop></detailtop>
    <detailassess></detailassess>
  </div>
</template>

<script>
    import Detailtop from '@/components/Detail/Detailtop.vue';
    import Detailassess from '@/components/Detail/Detailassess.vue'
    export default {
        name: 'detail',
        data () {
            return {}
        },
        components:{
            Detailtop,
            Detailassess
        }
    }
</script>


<style scoped>
  .s-detail{
    width: 1280px;
    margin: 0 auto;
  }
</style>
