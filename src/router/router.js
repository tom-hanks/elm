import Vue from 'vue'
import Router from 'vue-router'
import home1 from '@/components/home1'
import home2 from '@/components/home2'
import home3 from '@/components/home3'
import home4 from '@/components/home4'
import search from '@/components/zujian/search'

Vue.use(Router)

export default new Router({
  routes: [
   {
	  path: '*',
	  component: home1
	 },
    {
      path: '/',
      name: 'home1',
      component: home1
    },
    {
      path: '/home2',
      name: 'home2',
      component: home2
    },
    {
      path: '/home3',
      name: 'home3',
      component: home3
    },
    {
      path: '/home4',
      name: 'home4',
      component: home4
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ],
  mode: 'history'
})
