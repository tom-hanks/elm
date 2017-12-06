<template>
  <div class="home_tab">
      <router-link class='home_link' active-class="u-link_Active" to="home1"><i class="iconfont icon-eliaomo1"></i>外卖</router-link>
      <router-link class='home_link' active-class="u-link_Active" to="home2"><i class="iconfont icon-faxian-copy"></i>发现</router-link> 
      <router-link class='home_link' active-class="u-link_Active" to='home3'><i class="iconfont icon-dingdan1"></i>订单</router-link>
      <router-link class='home_link' active-class="u-link_Active" to='home4'><i class="iconfont icon-wode-fuben_fuzhi"></i>我的</router-link>
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
.home_tab{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.home_tab .home_link{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    height: 1.4rem;
}
.home_tab .home_link i{
  display: block;
  font-size: 0.54rem;
}
.home_tab .u-link_Active{
  color:#0089dc;
}
</style>
