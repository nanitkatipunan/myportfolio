import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Contacts from '@/components/Contacts.vue'
import About from '@/views/About.vue'
import Resume from '@/components/Resume.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/Contacts',
    name: 'Contacts',
    component:Contacts
  },
  {
    path: '/Resume',
    name: 'Resume',
    component:Resume
  },
  {
    path: '/About',
    name: 'About',
    component:About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
