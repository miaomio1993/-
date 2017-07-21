<template>
  <div>
    <headers></headers>
    <router-view></router-view>
  </div>
</template>

<script>
    import Headers from "./Header/Header.vue";
    export default {
        name: 'indexmain',
        data () {
            return {}
        },
        components:{
            Headers,
        }
    }
</script>


<style scoped>

</style>
