<template>
  <div>
    <headertop></headertop>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
    import Headertop from "./Header/Headertop";
    import Footers from "./Footer/Footer"
    export default {
        name: 'pageindex',
        data () {
            return {}
        },
        components:{
            Headertop,
            Footers
        }
    }
</script>


<style scoped>

</style>
