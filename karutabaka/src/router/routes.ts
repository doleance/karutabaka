import { RouteRecordRaw } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import ReciterView from '../components/ReciterView.vue'

export const ROUTE_NAMES = {
  HOME: 'home',
  RECITER: 'reciter',
  GALLERY: 'gallery',
  LEARNING: 'learning',
} as const

export const routes: RouteRecordRaw[] = [
  { path: '/', name: ROUTE_NAMES.HOME, component: HomeView },
  { path: '/reciter', name: ROUTE_NAMES.RECITER, component: ReciterView },
];