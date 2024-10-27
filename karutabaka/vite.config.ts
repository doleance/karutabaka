import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: `
					@use '@/assets/styles/colors' as *;
					@use '@/assets/styles/variables' as *;
					@use '@/assets/styles/mixins/breakpoints' as *;
				`,
			},
		},
	},
});
