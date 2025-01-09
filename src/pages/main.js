import '../assets/main.css'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import ResourcesView from './Resources.vue'
import HomeView from './Home.vue'
import ListingsView from './Listings.vue'
import EventDetailView from './EventDetail.vue'
import EventsView from './Events.vue'
import AlumniView from './Alumni.vue'
import AboutUsView from './AboutUs.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/resources', component: ResourcesView },
  { path: '/listings', component: ListingsView },
  { path: '/events/:eventid', component: EventDetailView },
  { path: '/events', component: EventsView },
  { path: '/alumni', component: AlumniView },
  { path: '/aboutus', component: AboutUsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
