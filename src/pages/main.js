import '../assets/main.css'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import ResourcesView from './Resources.vue'
import HomeView from './Home.vue'
import HighlightsView from './HighLights.vue'
import EventDetailView from './EventDetail.vue'
import EventsView from './Events.vue'
import LeadershipView from './Leadership.vue'
import AboutUsView from './AboutUs.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/resources', component: ResourcesView },
  { path: '/highlights', component: HighlightsView },
  { path: '/events/:eventid', component: EventDetailView },
  { path: '/events', component: EventsView },
  { path: '/leadership', component: LeadershipView },
  { path: '/aboutus', component: AboutUsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
