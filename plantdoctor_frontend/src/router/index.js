import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Plant from "@/views/Plant";
import LeafDamage from "@/views/LeafDamage";
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
    path: '/leafDamage',
    name: 'LeafDamage',
    component: LeafDamage,
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
