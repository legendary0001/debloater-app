import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import { Preferences } from '@capacitor/preferences';
import setuppage from '../views/setup.vue';
let value:any = null;
 Preferences.get({ key: 'setuped' })
 .then((value:any) => {
  console.log('Got value', value);
  value = value.value;
})
let path:string = 'null';
let main: any = null;
if (value === 'true') {

 main = HomePage
 path = '/home'
} else {
   main = setuppage
    path = '/setup'
    console.log(main)
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: path
  },
  {

    path: '/usbdebug',
 component: () => import('../views/usbdebug.vue')
  },
  {
    path: '/wifidebug',
    component: () => import('../views/wifidebug.vue')
  },
  {
    path: path,
    name: 'Home',
    component: main,
  }
]

 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router

