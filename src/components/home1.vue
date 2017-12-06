<template>
  <div class="home1">
    <div class="home1_header">
       <i class=" left iconfont icon-icon104"></i>
       <s class="left home1_dw" v-if='panduan'>{{ address }}</s>
       <s class="left home1_dw" v-else>正在定位</s>
       <i class="left iconfont icon-daosanjiao"></i>
       <div v-show='panduan' class="right home1_wd">
         <img v-bind:src="this.img_url" alt="">
       </div>
       <div  v-show='panduan'  class="right home1_tq">
         <p>{{wendu.temperature}}°</p>
         <p style="margin-top:2px;">{{wendu.description}}</p>
       </div>
    </div>
     <Maps></Maps>
     <!-- search -->
    <router-link class='' active-class="" to='search'><h1 class="search"><p><s class="iconfont icon-sousuo"></s>搜索商家、商品名称</p></h1></router-link>
    <homeTab></homeTab>
  </div>
</template>
<script>
import Maps from './zujian/maps.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      address: '',//定位的地址
      loads:false,
      wendu:'',
      img_url:'',
      hot_search:'',
      panduan:false //判断是否定位成功
    }
  },
  components:{
    Maps
  },
  mounted(){//相当于window.onload
    // alert(this.panduan)
      if (localStorage.getItem("lngssss")!=null) {
        this.dingwei(JSON.parse(localStorage.getItem("lngssss")),'dw',1);//定位
        this.dingwei(JSON.parse(localStorage.getItem("lngssss")),'wea',2);//天气
      }
  },
  methods:{

      dingwei(a,b,c){//a为lng和lat,b为为node.js请求的路由,d是判断,c为判断
        if(c==1){//地位address的地址显示
              this.$http.get('http://localhost:3000/homeapi/'+b,{params:{lng:a.lng,lat:a.lat}})
            .then(response=> {
              this.address=response.data.address;
              this.panduan=true;
              })
            .catch(function (error) {
                 console.log(error);
            });
        }else if(c==2){
           this.$http.get('http://localhost:3000/homeapi/'+b,{params:{lng:a.lng,lat:a.lat}})
            .then(response=> {
               this.wendu=response.data;
               this.img_url='https://fuss10.elemecdn.com/'+this.wendu.image_hash.substring(0,1)+'/'+this.wendu.image_hash.substring(1,3) +'/'+this.wendu.image_hash.substring(3,this.wendu.image_hash.length)+'.png?imageMogr/format/webp/thumbnail/!69x69r/  gravity/Center/crop/69x69/'
                 console.log(this.wendu);
              })
            .catch(function (error) {
                 console.log(error);
            });
        }
      }
  },
  watch:{
    list:function(newValue,oldValue){
      // this.dingwei(newValue,'dw',1);//定位
      // this.dingwei(newValue,'wea',2);//天气
    }
  },
  computed:{
        //计算属性  跟方法差不多  但是方法每次都要触发才执行  它只在数据变化的时候才执行  实时监听   只要用状态管理就要用它
        list(){
          if (this.$store.getters.doneTodosCount.lng) {
          //因为默认执行两次 一次初始  一次z
            this.dingwei(this.$store.getters.doneTodosCount,'dw',1);//定位
            this.dingwei(this.$store.getters.doneTodosCount,'wea',2);//天气
          }else{
            console.log('two')
          }
            return this.$store.getters.doneTodosCount;
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home1_header{
  height: 0.98rem;
  line-height: 0.58rem;
  width: 100%;
  padding :0 0.275rem;
  padding-top: 0.275rem;
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: linear-gradient(90deg,#0af,#0085ff);
  color: #fff;
  font-size: 20px;
}   
.home1_dw{
  display: inline-block;
   max-width: 48%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
}
.home1_wd{
  width: 30px;
  height: 100%;
}
.home1_wd img{
  width: 100%;
  height: 100%;
}
.home1_tq{
  width: 30px;
  height: 100%;
  font-size: 12px;
}
.home1_tq p{
  height: 12px;
  line-height: 12px;
}
.search{
  width: 100%;
  height:1.25rem;
  margin: 0 auto;
  padding: 0.25rem 0.5rem;
      background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search>p{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: .78rem;
  font-family: simsun;
  color: #666;
    font-size: .346667rem;
    font-weight: 700;
  background: #fff
}
.search>p>s{
  margin-right: 5px;
}
</style>
