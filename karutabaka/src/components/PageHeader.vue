<template>
	<header class="page-header">
		<div class="header-column">
			<img :src="imgSrc" alt="" height="44px" width="44" />
		</div>
		<nav class="page-navigation">
			<RouterLink v-for="(route, index) in routesToShow" :key="index" class="link" :to="{ name: route.name }">
				{{ route.meta?.navTitle }}
			</RouterLink>
		</nav>
		<div class="header-column"></div>
	</header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router/routes';
import { usePreferredDark } from '@vueuse/core';

const routesToShow = computed(() => routes.filter((route) => route.meta?.navTitle));

const isDark = usePreferredDark();
const imgSrc = computed(() => `/assets/images/bara-head${isDark.value ? '-momiji' : ''}.webp`);
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors' as *;

.page-header {
	align-items: center;
	background-image: url('/assets/images/patterns/header-bg-pattern.webp');
	background-repeat: repeat-x;
	background-size: auto 100%;
	display: flex;
	gap: 32px;
	height: 72px;
	justify-content: space-between;

	& .page-navigation {
		align-items: center;
		display: flex;
		gap: 16px;
		height: 100%;
		justify-content: center;

		& .link {
			color: $text-color-main;
			font-size: 20px;
			line-height: 24px;
			text-decoration: none;

			&:hover {
				color: $text-color-hover;
			}
		}
	}

	& .header-column {
		display: flex;
		flex-grow: 1;
		justify-content: flex-end;
		text-align: right;
	}
}
</style>
