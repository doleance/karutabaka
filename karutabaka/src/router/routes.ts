import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReciterView from '../views/ReciterView.vue';
import GalleryView from '../views/GalleryView.vue';

export type RouteName = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];

export const ROUTE_NAMES = {
	GALLERY: 'gallery',
	HOME: 'home',
	LEARNING: 'learning',
	RECITER: 'reciter',
	RULES: 'rules',
} as const;

export const routes: RouteRecordRaw[] = [
	{ path: '/', name: ROUTE_NAMES.HOME, component: HomeView, meta: { navTitle: 'Home' } },
	{ path: '/learning', name: ROUTE_NAMES.LEARNING, component: ReciterView, meta: { navTitle: 'Learning' } },
	{ path: '/gallery', name: ROUTE_NAMES.GALLERY, component: GalleryView, meta: { navTitle: 'Gallery' } },
	{ path: '/reciter', name: ROUTE_NAMES.RECITER, component: ReciterView, meta: { navTitle: 'Reciter' } },
	{ path: '/rules', name: ROUTE_NAMES.RULES, component: ReciterView, meta: { navTitle: 'Rules' } },
];
