<template>
  <div class="hello">
  <div class="amap_f">
      <div class="amap-page-container">
      <el-amap vid="amap" :plugin="plugin" :zoom="zoom" class="amap-demo" :center="center">
      </el-amap>

      <div class="toolbar">
        <!-- <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }} address: {{ address }}
        </span>
        <span v-else>正在定位</span> -->
      </div>
    </div>
  </div>
  <!-- <headerTip></headerTip> -->
   <!-- {{list}} -->
   <homeTab></homeTab>
   
  </div>
</template>

<script>
// import maps from 'vue-amap';

export default {
      data() {
        let self = this;
        return {
          zoom: 12,
          address:'',
          lng: 0,
          lat: 0,
          center: [0, 0],
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // alert('sss')
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                // console.log('经纬度1'+self.lng)
                // console.log('经纬度1'+self.lat)
 
                self.$store.dispatch("increment",{lng:self.lng,lat:self.lat});
                  }
                });
              }
            }
          }]
        };
      },
      mounted(){//window.onload

         
        
      },
      methods:{
        
           
        
      },
      computed:{
        //计算属性  跟方法差不多  但是方法每次都要触发才执行  它只在数据变化的时候才执行  实时监听   只要用状态管理就要用它
        
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.amap_f{
  width: 100%;
  height: 500px;
}*/
.amap-demo {
      display: none;
      height: 300px;
    }
</style>
