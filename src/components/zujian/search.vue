<template>
  <div class="search">
   <header>
     <router-link class='link_black' to="home1"><s class="iconfont icon-fanhui a_black left"></s></router-link>
     <p class="left"><i class="iconfont icon-sousuo sousuo"></i><input type="text" placeholder="输入商家、商品名称"></p>
     <span class="left">搜索</span>
   </header>
   <div class="search_main">
      <h1>热门搜索</h1>
      <ul class="clearfix">
        <li>{{lists}}</li>
      </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hot_searchLis:''
    }
  },
  watch:{
      lists:function(newValue,oldValue){
      console.log(1111)
    }
  },
  mounted(){

  },
  methods:{
    
  },
  computed:{
      lists(){
        // console.log(this.$store.getters.doneTodosCount)
        return this.$store.getters.doneTodosCount;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search{
     position:fixed;
    width:100%;
    height:100%;
  background: pink
}
header{
  width: 100%;
  height:1.25rem;
  margin: 0 auto;
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: linear-gradient(90deg,#0af,#0085ff);
}
.link_black{
  display: inline-block;
  height: 100%;
  width: 10%;
  float: left;
}
.a_black{
  display: inline-block;
  line-height: 100%;
  text-align: center;
  padding-top: 0.4525rem;
  font-size: 22px;
  vertical-align: middle;
  width: 1rem;
  position: absolute;
  left: 0;
  top: 0;
}
header>p{
    width: 73%;
    height: 100%;
    position:relative;
}
header>p>input{
  width: 90%;
  height: 50%;
  vertical-align: middle;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding-left: 50px;
  color: #666;
}
header>p>.sousuo{
    position: absolute;
    left: 0.875rem;
    top: 0.325rem;
    z-index: 1;
    color: #666;
}
header>span{
    color: #333;
    font-size: .426667rem;
    font-weight: 700;
    float: left;
    width: 12%;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
}
.search_main>h1{
    font-size: .426667rem;
    color: #666;
    font-weight: 700;
    margin-top: 0.5rem;
    padding: 0.25rem;
}
.search_main>ul{
  padding: 0.25rem;
}
.search_main>ul>li{
  padding: 5px 0.25rem;
  color: #666;
  font-size: 16px;
  float: left;
}
</style>
