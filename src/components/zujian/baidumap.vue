<template>
  <baidu-map class="bm-view" :center="center"  ak="scDG068ENaOujkDTyZuOmsj6CVnAalR1" :zoom="15" :scroll-wheel-zoom="true"  @ready="handler"> 
     <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
     <bm-geolocation @locationSuccess='locationSuccess1' anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
</template>

<script>
import {BaiduMap} from 'vue-baidu-map'
import {BmNavigation} from 'vue-baidu-map'
import {BmGeolocation} from 'vue-baidu-map'


export default {
 data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  components:{
    BaiduMap,
    BmNavigation,
    BmGeolocation
  },
  mounted() {

  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      // console.log(map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15;

    },
    locationSuccess1({point, AddressComponent}){
          // console.log(point);
          this.center.lng=point.lng;
          this.center.lat=point.lat;
      }
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 500px;
}
</style>