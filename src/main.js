// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import HomeTab from './components/zujian/homeTab'
import headerTip from './components/zujian/headerTip'
import axios from 'axios'
import VueAMap from 'vue-amap';
import Vuex from "vuex";
Vue.use(Vuex);
import store from './store/store.js'
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '6a0948a0c1580f9d241f7f9d3ffd7055',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.Geolocation','AMap.Geocoder','AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
Vue.config.productionTip = false
// Vue.component(HomeTab);
/*注册全局的组件*/ 
Vue.component('HomeTab', HomeTab)
Vue.component('headerTip', headerTip)
/*给Vue绑定一个axios的方法，这样就不用每个页面都引了，
*用的时候只需要this.$http.get就可以了
*/ 
Vue.prototype.$http = axios



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  template: '<App/>',
  components: { App }
})
