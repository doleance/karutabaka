import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReciterView from '../views/ReciterView.vue';

export type RouteName = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];

export const ROUTE_NAMES = {
	HOME: 'home',
	RECITER: 'reciter',
	GALLERY: 'gallery',
	LEARNING: 'learning',
} as const;

export const routes: RouteRecordRaw[] = [
	{ path: '/', name: ROUTE_NAMES.HOME, component: HomeView, meta: { navTitle: 'Home' } },
	{ path: '/reciter', name: ROUTE_NAMES.RECITER, component: ReciterView, meta: { navTitle: 'Reciter' } },
	{ path: '/gallery', name: ROUTE_NAMES.GALLERY, component: ReciterView, meta: { navTitle: 'Gallery' } },
	{ path: '/learning', name: ROUTE_NAMES.LEARNING, component: ReciterView, meta: { navTitle: 'Learning' } },
];
