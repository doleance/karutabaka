<template>
	<header class="header">
		<div class="header-column">
			<img :src="imgSrc" alt="" height="44px" width="44" />
		</div>
		<nav class="nav">
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
const imgSrc = computed(() => `/assets/images/patterns/bara-head${isDark.value ? '-momiji' : ''}.webp`);
</script>

<style lang="scss" scoped>
.header {
	background-image: url('/assets/images/patterns/header-bg-pattern.webp');
	background-repeat: repeat-x;
	background-size: auto 100%;
	height: 72px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 32px;
}

.header .nav {
	align-items: center;
	display: flex;
	gap: 16px;
	height: 100%;
	justify-content: center;
}

.header .header-column {
	flex-grow: 1;
	text-align: right;
	display: flex;
	justify-content: flex-end;
}

.header .nav .link {
	color: #161312;
	text-decoration: none;
	font-size: 20px;

	&:hover {
		color: white;
	}
}
</style>
