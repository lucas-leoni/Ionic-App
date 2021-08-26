import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import School from '../views/School.vue'
import Login from '../views/Login.vue'
import Idade from '../views/Idade.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/school',
    name: 'School',
    component: School
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/idade',
    name: 'Idade',
    component: Idade
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
