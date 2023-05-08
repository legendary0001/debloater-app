import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import { Preferences } from '@capacitor/preferences';
let value:any = null;
 Preferences.get({ key: 'setuped' })
 .then((value:any) => {
  console.log('Got value', value);
  value = value.value;
})

let main: any = null;
if (value === 'true') {

 main = HomePage
} else {
   main = () => import('../views/setup.vue')
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: main,
  }
]

 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router

