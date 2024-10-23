import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

export default createRouter({
	history: createWebHistory(),
	routes,
});

declare module 'vue-router' {
	interface RouteMeta {
		navTitle?: string;
	}
}
