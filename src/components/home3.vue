<template>
  <div class="hello">
    <Baidumap></Baidumap>
    <homeTab></homeTab>
  </div>
</template>

<script>
import Baidumap from './zujian/baidumap.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Baidumap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
