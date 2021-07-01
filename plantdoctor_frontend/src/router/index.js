import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Plant from "@/views/Plant";
import LeaveDamage from "@/views/LeaveDamage";
import SignIn from "@/views/SignIn";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plant',
    name: 'Plant',
    component: Plant,
  },
  {
    path: '/leaveDamage',
    name: 'LeaveDamage',
    component: LeaveDamage,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
