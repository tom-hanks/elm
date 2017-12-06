<template>
  <div class="header_tip">
      <span class="iconfont icon-fanhui header_left"></span>
      我是头部
  </div>
</template>

<script>
export default {
  name: 'ssss',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_tip{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    font-size: .48rem;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.header_left{
  display: inline-block;
  width: 0.9rem;
  font-size: .48rem;
  position: absolute;
  left: 0;
}
</style>
